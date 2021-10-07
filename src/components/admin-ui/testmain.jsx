import React from 'react';
import { useState } from 'react/cjs/react.development';

const Testmain = (dblist) => {

  console.log(dblist);

  return (
    <>
        <h1>{dblist}</h1>
        <table border ="1">
          <th>타이틀</th>
          <th>가격</th>
          <th>내용</th>
            <tr>
              <td>블라블라</td>
              <td>볼라볼라</td>
              <td>22222</td>
            </tr>
            <tr>
              <td>훌라훌라</td>
              <td>훌랄랄라</td>
              <td>111111</td>
            </tr>
            <tr>
            </tr>
        </table>
    </>
    );
};

export default Testmain;