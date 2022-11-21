import { useUpdateIssue, useIssue } from "context/Issue";
import NextStepButton from "../NextStepButton";
import { useNextStep } from "context/Steps";
import { Typography } from "@mui/material";

function ConfirmIssueStep() {
  // Using the custom Hook to update the Issue general state
  const updateIssue = useUpdateIssue();
  const issueData = useIssue();

  // Use next step context
  const goNextStep = useNextStep();

  // State
  let allStocks = 0;
  let allCount = 0;
  let stocksLeft = 0;
  let leagueCount = 0;
  let leagueMemberStock = 0;

  /*Calculate League Inherits Stocks */
  // Count All Fard Inherits Stocks
  issueData.fardInherits.map((inherit) => {
    allStocks = allStocks + inherit.stocks;
    allCount = allCount + inherit.count;
    return allStocks, allCount;
  });

  // Calculate Stocks Lefts
  stocksLeft = 24 - allStocks;

  const nextStep = () => {
    if (allStocks > 24) {
      // مسألة عائلة
      const newFardInherits = issueData.fardInherits.map((inherit) => {
        // Update each Inherits Earnings based on the stock value
        return {
          ...inherit,
          earn: (inherit.stocks * issueData.amount) / allStocks,
        };
      });
      const data = {
        fardInherits: newFardInherits,
        issueType: "عائلة",
        allStocks: parseInt(allStocks),
      };
      updateIssue(data);
    }

    if (allStocks < 24) {
      // مسألة عادلة
      if (issueData.leagueInherits.length > 0) {
        // One League Member
        if (issueData.leagueInherits.length == 1) {
          leagueCount = issueData.leagueInherits[0].count;
          leagueMemberStock = stocksLeft / leagueCount;
          let leagueStocks =
            leagueMemberStock * issueData.leagueInherits[0].count;
          const data = {
            leagueInherits: [
              {
                ...issueData.leagueInherits[0],
                stocks: leagueStocks,
                earn: (issueData.amount * leagueStocks) / 24,
              },
            ],
            issueType: "عادلة",
            allStocks: parseInt(allStocks) + leagueStocks,
          };
          updateIssue(data);
        }

        // Two League Members At The Same Time
        if (issueData.leagueInherits.length == 2) {
          // They are Sons and Daughters
          leagueCount =
            issueData.leagueInherits[0].count * 2 +
            issueData.leagueInherits[1].count;
          leagueMemberStock = stocksLeft / leagueCount;
          let maleLeagueStocks =
            leagueMemberStock * 2 * issueData.leagueInherits[0].count;
          let femaleLeagueStocks =
            leagueMemberStock * issueData.leagueInherits[1].count;
          const data = {
            leagueInherits: [
              {
                ...issueData.leagueInherits[0],
                stocks: maleLeagueStocks,
                earn: (issueData.amount * maleLeagueStocks) / 24,
              },
              {
                ...issueData.leagueInherits[1],
                stocks: femaleLeagueStocks,
                earn: (issueData.amount * femaleLeagueStocks) / 24,
              },
            ],
            issueType: "عادلة",
            allStocks: 24,
          };
          updateIssue(data);
        }

        // Three League Members At The Same Time
        if (issueData.leagueInherits.length == 3) {
          // Special Case Daughters with Granddaughters with GrandGrandsons with GrandGranddaughters
          leagueCount =
            issueData.leagueInherits[0].count * 2 +
            issueData.leagueInherits[1].count +
            issueData.leagueInherits[2].count;
          leagueMemberStock = stocksLeft / leagueCount;
          let maleLeagueStocks =
            leagueMemberStock * 2 * issueData.leagueInherits[0].count;
          let firstFemaleLeagueStocks =
            leagueMemberStock * issueData.leagueInherits[1].count;
          let secondFemaleLeagueStocks =
            leagueMemberStock * issueData.leagueInherits[2].count;
          const data = {
            leagueInherits: [
              {
                ...issueData.leagueInherits[0],
                stocks: maleLeagueStocks,
                earn: (issueData.amount * maleLeagueStocks) / 24,
              },
              {
                ...issueData.leagueInherits[1],
                stocks: firstFemaleLeagueStocks,
                earn: (issueData.amount * firstFemaleLeagueStocks) / 24,
              },
              {
                ...issueData.leagueInherits[2],
                stocks: secondFemaleLeagueStocks,
                earn: (issueData.amount * secondFemaleLeagueStocks) / 24,
              },
            ],
            issueType: "عادلة",
            allStocks:
              parseInt(allStocks) +
              maleLeagueStocks +
              firstFemaleLeagueStocks +
              secondFemaleLeagueStocks,
          };
          updateIssue(data);
        }
      }

      //مسألة رديّة
      if (issueData.leagueInherits.length == 0) {
        if (issueData.creed == "الحنفي") {
          if (!issueData.hasPartner) {
            // There is no husband or wife
            // Calculate the left stocks
            const newFardInherits = issueData.fardInherits.map((inherit) => {
              // Update each Inherits Earnings based on the stock value
              return {
                ...inherit,
                earn: (inherit.stocks * issueData.amount) / allStocks,
              };
            });
            const data = {
              fardInherits: newFardInherits,
              issueType: "رديّة",
              allStocks: parseInt(allStocks),
              note: "الباقي يُرد على أصحاب الفروض",
            };
            updateIssue(data);
          } else {
            // There is husband or wife
            if (issueData.fardInherits.length == 1) {
              // There are only partner inherit
              const newFardInherits = issueData.fardInherits.map((inherit) => {
                // Update each Inherits Earnings based on the stock value
                return {
                  ...inherit,
                  earn: (inherit.stocks * issueData.amount) / allStocks,
                };
              });
              const data = {
                fardInherits: newFardInherits,
                issueType: "رديّة",
                allStocks: parseInt(allStocks),
                note: "الباقي يُرد على الزوج",
              };
              updateIssue(data);
            }

            if (issueData.fardInherits.length > 1) {
              // There are inherits with The Partners
              let partnerEarn = 0;
              let partnerStocks = 0;
              let amountAfterRemovingPartnerEarn = 0;

              issueData.fardInherits.filter((inherit) => {
                if (inherit.title == "الزوج" || inherit.title == "الزوجات") {
                  partnerEarn = inherit.earn;
                  partnerStocks = inherit.stocks;
                }
                return partnerEarn, partnerStocks;
              });

              amountAfterRemovingPartnerEarn = issueData.amount - partnerEarn;
              stocksLeft = allStocks - partnerStocks;

              const newFardInherits = issueData.fardInherits.map((inherit) => {
                // Update each Inherits Earnings based on the stock value
                if (!(inherit.title == "الزوج" || inherit.title == "الزوجات")) {
                  return {
                    ...inherit,
                    earn:
                      (inherit.stocks * amountAfterRemovingPartnerEarn) /
                      stocksLeft,
                  };
                } else {
                  return { ...inherit };
                }
              });
              const data = {
                fardInherits: newFardInherits,
                issueType: "رديّة",
                allStocks: parseInt(allStocks),
                note: "الباقي يُرد على أصحاب الفروض",
              };
              updateIssue(data);
            }
          }
        }
      }
    }

    goNextStep();
  };

  return (
    <>
      <Typography
        color="secondary"
        fontWeight="bold"
        textAlign="center"
        fontSize="1.3rem"
      >
        المسألة أصبحت جاهزة للحل تم إختيار جميع الورثة المحتملين
      </Typography>
      <NextStepButton nextStep={nextStep} />
    </>
  );
}

export default ConfirmIssueStep;
