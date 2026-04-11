/* =========================================================
   Client-side SEO Tools
   - Title / meta length checker
   - Keyword density analyser
   - Readability estimator (Flesch)
   - Slug generator
   ========================================================= */

window.ATS_TOOLS = (function () {
  const STOP_WORDS = new Set(
    "a,about,above,after,again,against,all,am,an,and,any,are,aren,as,at,be,because,been,before,being,below,between,both,but,by,can,cannot,could,couldn,did,didn,do,does,doesn,doing,don,down,during,each,few,for,from,further,had,hadn,has,hasn,have,haven,having,he,her,here,hers,herself,him,himself,his,how,i,if,in,into,is,isn,it,its,itself,just,let,me,more,most,mustn,my,myself,no,nor,not,now,of,off,on,once,only,or,other,ought,our,ours,ourselves,out,over,own,same,shan,she,should,shouldn,so,some,such,than,that,the,their,theirs,them,themselves,then,there,these,they,this,those,through,to,too,under,until,up,very,was,wasn,we,were,weren,what,when,where,which,while,who,whom,why,will,with,won,would,wouldn,you,your,yours,yourself,yourselves".split(
      ","
    )
  );

  function lengthStatus(length, [min, max]) {
    if (length === 0) return { label: "empty", klass: "bad", note: "Empty" };
    if (length < min)
      return {
        label: "short",
        klass: "warn",
        note: `Too short (< ${min} chars)`,
      };
    if (length > max)
      return {
        label: "long",
        klass: "bad",
        note: `Too long (> ${max} chars — may be truncated)`,
      };
    return { label: "ok", klass: "ok", note: `Good (${min}–${max})` };
  }

  function titleStatus(title) {
    return lengthStatus((title || "").length, [30, 60]);
  }
  function metaStatus(meta) {
    return lengthStatus((meta || "").length, [120, 160]);
  }

  function keywordDensity(text) {
    const clean = (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(Boolean);
    const total = clean.length;
    if (total === 0) return { total: 0, rows: [] };
    const counts = {};
    for (const w of clean) {
      if (STOP_WORDS.has(w) || w.length < 3) continue;
      counts[w] = (counts[w] || 0) + 1;
    }
    const rows = Object.entries(counts)
      .map(([word, count]) => ({
        word,
        count,
        density: ((count / total) * 100).toFixed(2),
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);
    return { total, rows };
  }

  // Simple Flesch Reading Ease estimator
  function countSyllables(word) {
    word = word.toLowerCase().replace(/[^a-z]/g, "");
    if (word.length <= 3) return 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "");
    word = word.replace(/^y/, "");
    const matches = word.match(/[aeiouy]{1,2}/g);
    return matches ? matches.length : 1;
  }
  function readability(text) {
    const clean = (text || "").trim();
    if (!clean) return null;
    const sentences = Math.max(1, (clean.match(/[.!?]+(?:\s|$)/g) || []).length);
    const words = clean.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    if (wordCount === 0) return null;
    const syllables = words.reduce((n, w) => n + countSyllables(w), 0);
    const asl = wordCount / sentences;
    const asw = syllables / wordCount;
    const flesch = 206.835 - 1.015 * asl - 84.6 * asw;
    let grade = "College";
    if (flesch >= 90) grade = "5th grade (very easy)";
    else if (flesch >= 80) grade = "6th grade (easy)";
    else if (flesch >= 70) grade = "7th grade (fairly easy)";
    else if (flesch >= 60) grade = "8th–9th grade (plain English)";
    else if (flesch >= 50) grade = "10th–12th grade (fairly difficult)";
    else if (flesch >= 30) grade = "College (difficult)";
    else grade = "College graduate (very difficult)";
    return {
      words: wordCount,
      sentences,
      syllables,
      flesch: Math.max(0, Math.round(flesch)),
      grade,
    };
  }

  function makeSlug(s) {
    return String(s || "")
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .split(/\s+/)
      .filter((w) => w && !STOP_WORDS.has(w))
      .join("-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  return {
    titleStatus,
    metaStatus,
    lengthStatus,
    keywordDensity,
    readability,
    makeSlug,
  };
})();
