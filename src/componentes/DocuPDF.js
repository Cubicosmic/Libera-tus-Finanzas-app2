import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const DocuPDF = ({ img, date, saldo }) => {

  return (
    <Document>
      <Page>
        <view style={{
          width: '100%',
        }}>
        {date.map((e,i)=>{
          return(
            <View key={i}>
              <Text>{date[i]}</Text>
              <Text>{saldo[i]}</Text>
            </View>
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
