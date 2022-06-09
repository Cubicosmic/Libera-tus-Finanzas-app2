import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPDF = ({ img, date, saldo }) => {

  return (
    <Document>
      <Page>
        <view style={{
          padding: '50px'
        }}>
        {date.map((e,i)=>{
          return(
            <Text key={i}>{date[i]}- ${saldo[i]}</Text>
          )
        })}
        </view>
      </Page>
      <Page>
        <View style={{display: 'flex', justifyContent: 'center'}}>
          <Image src={img}></Image>
        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
