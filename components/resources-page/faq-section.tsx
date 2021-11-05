import React from "react";
import FAQ from "./faq";
import { Text, View } from "../Themed";

const faqSection = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "left",
          paddingTop: 40,
          paddingBottom: 10,
          backgroundColor: "white",
        }}
      >
        {" "}
        FAQ{" "}
      </Text>
      <FAQ
        question="How can I apply for a loan online?"
        answer="A Small Business Loan can help you purchase business assets or finance expansion plans. Fixed or floating interest rates are available for Small Business Loans."
      />
      <FAQ
        question="What is the best way to gain credit?"
        answer="You don't You don't You don't You don't"
      />
      <FAQ
        question="What options do I have for a line of credit?"
        answer="You don't You don't You don't You don't"
      />
      <FAQ
        question="Should I have a consistent post schedule?"
        answer="You don't You don't You don't You don't"
      />
      <FAQ
        question="How does engagement affect cashback?"
        answer="You don't You don't You don't You don't"
      />
    </View>
  );
};
export default faqSection;
