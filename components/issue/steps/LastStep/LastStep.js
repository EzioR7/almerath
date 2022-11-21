import { useIssue } from "context/Issue";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import {
  NumbersTwoTone,
  DonutSmall,
  ShowChart,
  MonetizationOn,
} from "@mui/icons-material";
import ResetStepsButton from "../../ResetStepsButton";

function LastStep() {
  // Using the custom Hook to update the Issue general state
  const issueData = useIssue();

  return (
    <>
      <Typography
        variant="h4"
        color="secondary"
        mt={4}
        fontWeight="bold"
        textAlign="center"
        mb={3}
      >
        النتيجة و تفاصيل الحل
      </Typography>
      <Grid container columnGap={4} rowGap={4} justifyContent="center">
        <Grid item>
          <Chip
            color="primary"
            label={
              <Typography fontWeight="bold">{`قيمة التركة: ${
                Number.isInteger(issueData.amount)
                  ? issueData.amount
                  : issueData.amount.toFixed(2)
              }`}</Typography>
            }
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            color="primary"
            label={
              <Typography fontWeight="bold">{`المذهب: ${issueData.creed}`}</Typography>
            }
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            color="primary"
            label={
              <Typography fontWeight="bold">{`نوع المسألة: ${issueData.issueType}`}</Typography>
            }
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Chip
            color="primary"
            label={
              <Typography fontWeight="bold">{`أصل المسألة : ${issueData.allStocks}`}</Typography>
            }
            variant="outlined"
          />
        </Grid>
        <Grid item>
          {issueData.note != "" ? (
            <Chip
              color="primary"
              label={
                <Typography fontWeight="bold">{`ملاحظة:  ${issueData.note}`}</Typography>
              }
              variant="outlined"
            />
          ) : null}
        </Grid>
      </Grid>
      {issueData.fardInherits.length > 0 ? (
        <>
          <Typography variant="h4" color="primary" mt={4} fontWeight="bold">
            أصحاب الفروض
          </Typography>
          <Grid container columnGap={3} rowGap={3}>
            {issueData.fardInherits.map((inherit) => {
              return (
                <Grid item key={inherit.title} md={4}>
                  <Card
                    sx={{ minWidth: 275 }}
                    className="glass-bg-card"
                    variant="outlined"
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        color="primary"
                        textAlign="center"
                        fontWeight="bold"
                      >
                        {inherit.title}
                      </Typography>
                      <Typography variant="h6" color="secondary">
                        {" "}
                        <NumbersTwoTone sx={{ float: "left" }} />
                        العدد: {inherit.count}
                      </Typography>
                      <Typography variant="h6" color="secondary">
                        {" "}
                        <DonutSmall sx={{ float: "left" }} />
                        الفرض: {inherit.cut}
                      </Typography>
                      <Typography variant="h6" color="secondary">
                        {" "}
                        <ShowChart sx={{ float: "left" }} />
                        الأسهم:{" "}
                        {Number.isInteger(inherit.stocks)
                          ? inherit.stocks
                          : inherit.stocks.toFixed(2)}
                      </Typography>
                      {issueData.issueType == "رديّة" ? (
                        <>
                          <Typography variant="h6" color="secondary">
                            {" "}
                            <MonetizationOn sx={{ float: "left" }} />
                            نصيب الفرض:{" "}
                            {Number.isInteger(
                              (inherit.stocks * issueData.amount) / 24
                            )
                              ? (inherit.stocks * issueData.amount) / 24
                              : (
                                  (inherit.stocks * issueData.amount) /
                                  24
                                ).toFixed(2)}
                          </Typography>
                          <Typography variant="h6" color="secondary">
                            {" "}
                            <MonetizationOn sx={{ float: "left" }} />
                            نصيب الرّد:{" "}
                            {Number.isInteger(
                              inherit.earn -
                                (inherit.stocks * issueData.amount) / 24
                            )
                              ? inherit.earn -
                                (inherit.stocks * issueData.amount) / 24
                              : (
                                  inherit.earn -
                                  (inherit.stocks * issueData.amount) / 24
                                ).toFixed(2)}
                          </Typography>
                        </>
                      ) : null}
                      <Typography variant="h6" color="secondary">
                        {" "}
                        <MonetizationOn sx={{ float: "left" }} />
                        النصيب:{" "}
                        {Number.isInteger(inherit.earn)
                          ? inherit.earn
                          : inherit.earn.toFixed(2)}
                      </Typography>
                      {inherit.count > 1 ? (
                        <Typography variant="h6" color="secondary">
                          {" "}
                          <MonetizationOn sx={{ float: "left" }} />
                          نصيب الفرد الواحد:{" "}
                          {Number.isInteger(inherit.earn / inherit.count)
                            ? inherit.earn / inherit.count
                            : (inherit.earn / inherit.count).toFixed(2)}
                        </Typography>
                      ) : null}
                      <Divider variant="middle">الدليل</Divider>
                      <Typography
                        variant="body"
                        color="primary"
                        fontWeight="bold"
                        fontSize="1.2rem"
                        className="quran"
                      >
                        {inherit.proof}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : null}

      {issueData.leagueInherits.length > 0 ? (
        <>
          <Typography variant="h4" color="primary" mt={4} fontWeight="bold">
            العصبات
          </Typography>
          <Grid container columnGap={3} rowGap={3}>
            {issueData.leagueInherits.map((inherit) => {
              return (
                <Grid item key={inherit.title} md={4}>
                  <Card
                    sx={{ minWidth: 275 }}
                    variant="outlined"
                    className="glass-bg-card"
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        color="primary"
                        fontWeight="bold"
                        textAlign="center"
                      >
                        {inherit.title}
                      </Typography>
                      <Typography variant="h6" color="secondary">
                        {" "}
                        <NumbersTwoTone sx={{ float: "left" }} />
                        العدد: {inherit.count}
                      </Typography>
                      <Typography variant="h6" color="secondary">
                        <ShowChart sx={{ float: "left" }} />
                        الأسهم: {inherit.stocks}
                      </Typography>
                      <Typography variant="h6" color="secondary">
                        {" "}
                        <MonetizationOn sx={{ float: "left" }} />
                        النصيب:{" "}
                        {Number.isInteger(inherit.earn)
                          ? inherit.earn
                          : inherit.earn > 0
                          ? inherit.earn.toFixed(2)
                          : null}
                      </Typography>
                      {inherit.count > 1 ? (
                        <Typography variant="h6" color="secondary">
                          {" "}
                          <MonetizationOn sx={{ float: "left" }} />
                          نصيب الفرد الواحد:{" "}
                          {Number.isInteger(inherit.earn / inherit.count)
                            ? inherit.earn / inherit.count
                            : (inherit.earn / inherit.count).toFixed(2)}
                        </Typography>
                      ) : null}
                      {inherit.stocks == "" ||
                      inherit.stocks == undefined ||
                      inherit.stocks == 0 ? (
                        <Typography fontWeight="bold" textAlign="center" mb={2}>
                          لم يتبقى شئ
                        </Typography>
                      ) : null}
                      <Divider variant="middle">الدليل</Divider>
                      <Typography
                        variant="body"
                        color="primary"
                        fontWeight="bold"
                        fontSize="1.2rem"
                        className="quran"
                      >
                        {inherit.proof}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : null}

      <ResetStepsButton />
    </>
  );
}

export default LastStep;
