import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Platform, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Personal Loans </Text>
      <Text>
        {" "}
        Borrow only what you need now, for what you want.
        {"\n"}
        {"\n"}A TD Personal Loan gives you the credit you need, with fixed
        monthly loan payments that fit your budget. Start your application to
        see your personalized interest rate options now.
        {"\n"}
        {"\n"}A TD Personal Loan is a flexible borrowing solution that you can
        use to borrow money for a specific goal. You can use a loan to finance a
        renovation project, make a big purchase or consolidate your higher
        interest debts. Loans are available with fixed or variable interest
        rates and come with flexible repayment options to help you budget. Call,
        click, or visit a TD Branch to apply for a personal loan.
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}{" "}
      </Text>

      <Text style={styles.subtitle}>Small Business Loans </Text>
      <Text>
        A Small Business Loan can help you purchase business assets or finance
        expansion plans.
        {"\n"}
        {"\n"}
        {"\n"}
        Fixed or floating interest rates are available for Small Business Loans.
        {"\n"}
        {"\n"}
        Flexible security options include: business assets, business real
        estate, residential real estate (full or partial), liquid or margin
        security (full or partial)
        {"\n"}
        {"\n"}
        Flexible payment options: Choice of 1 to 5 year fixed-rate terms.
        Amortization up to 30 years, based upon the useful life of the asset
        financed
        {"\n"}
        {"\n"}
        Floating interest rate options available based on TD Prime Rate with no
        prepayment penalties
        {"\n"}
        {"\n"}
        Fixed interest rate options available with the flexibility to make up to
        10% principal pre-payments of the original loan amount annually without
        penalty
      </Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "flex-end",
    justifyContent: "center",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "600",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
