/* Step04 Helper Functions */
const maleAndFemale = (titleM, countM, titleF, countF, updateIssue) => {
  const data = {
    leagueInherits: [
      {
        title: titleM,
        count: parseInt(countM),
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏" سورة النساء آية رقم 176',
      },
      {
        title: titleF,
        count: parseInt(countF),
        proof:
          'قال عزّ و جلّ: "‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏‏‏‏" سورة النساء آية رقم 176',
      },
    ],
  };

  updateIssue(data);
};
const maleLeagueOnly = (title, count, updateIssue) => {
  const data = {
    leagueInherits: [
      {
        title: title,
        count: parseInt(count),
        proof:
          "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
      },
    ],
  };

  updateIssue(data);
};
const oneFemaleOnly = (title, issueData, updateIssue) => {
  let fard = issueData.fardInherits;
  fard.push({
    title: title,
    count: 1,
    cut: "النصف",
    stocks: 12,
    earn: (issueData.amount * 12) / 24,
    proof:
      'قالَ عزَّ و جلَّ: "‏‏‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏‏‏‏ ‏ ‏‏‏‏‏‏‏ ‏‏ ‏‏‏‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏‏ ‏‏‏ ‏‏ ‏‏‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏ ‏‏ ‏‏‏ ‏‏‏ ‏‏‏" سورة النساء آية رقم 176.',
  });
  const data = {
    fardInherits: fard,
  };

  updateIssue(data);
};
const twoAndMoreFemale = (title, count, issueData, updateIssue) => {
  let fard = issueData.fardInherits;
  fard.push({
    title: title,
    count: parseInt(count),
    cut: "الثلثين",
    stocks: 16,
    earn: (issueData.amount * 16) / 24,
    proof:
      'قالَ عزَّ و جلَّ: " ‏‏‏ ‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏‏‏ ‏‏‏ ‏‏‏‏ " سورة النساء آية رقم 176.',
  });

  const data = {
    fardInherits: fard,
  };

  updateIssue(data);
};
export { maleAndFemale, maleLeagueOnly, oneFemaleOnly, twoAndMoreFemale };
