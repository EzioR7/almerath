/* Step03 Helper Functions */

// Fathers Sixth cut
const fathersSixthCut = (title, issueData, updateIssue) => {
  let fard = issueData.fardInherits;
  fard.push({
    title: title,
    count: 1,
    cut: "السدس",
    stocks: 4,
    earn: (issueData.amount * 4) / 24,
    proof:
      'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
  });
  const data = {
    fardInherits: fard,
  };

  updateIssue(data);
};

// Fathers with No Children
const fathersWithNoChildren = (title, updateIssue) => {
  const data = {
    leagueInherits: [
      {
        title: title,
        count: 1,
        proof:
          "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
      },
    ],
  };

  updateIssue(data);
};

// Fathers with Only daughters
const fathersWithOnlyDaughters = (title, updateIssue) => {
  const data = {
    leagueInherits: [
      {
        title: title,
        count: 1,
        proof:
          "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صلّى اللَّهُ عَلَيْهِ وسلّم: أَلْحِقُوا الْفَرَائِضَ بِأَهْلِهَا، فَمَا بَقِيَ فَهُوَ لِأَوْلَى رَجُلٍ ذَكَرٍ. مُتَّفَقٌ عَلَيْهِ.",
      },
    ],
  };

  updateIssue(data);
};

// Mothers Sixth Cut
const mothersSixthCut = (title, issueData, updateIssue) => {
  let fard = issueData.fardInherits;
  fard.push({
    title: title,
    count: 1,
    cut: "السدس",
    stocks: 4,
    earn: (issueData.amount * 4) / 24,
    proof:
      'قالَ عزَّ و جلَّ: "‏‏‏‏‏ ‏‏ ‏‏‏ ‏‏‏‏‏ ‏‏‏‏‏ ‏‏‏ ‏‏‏ ‏‏ ‏‏ ‏‏ ‏‏‏" سورة النساء آية رقم 11.',
  });
  const data = {
    fardInherits: fard,
  };

  updateIssue(data);
};

export {
  fathersSixthCut,
  fathersWithNoChildren,
  fathersWithOnlyDaughters,
  mothersSixthCut,
};
