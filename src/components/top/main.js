import React from "react";
import "../../styles/top_style/main.css";
// import { ReactComponent as Mainbackgraund } from "../../img/Home/SVG/home2.svg";

const Main = () => {
  return (
    <>
 
      <div className="maingraund">
        <div className="MainAll" id="Mn">
          <h2>About</h2>
          <div className="abt">
            <div className="nm">
              <p>古川稚彩</p>
              <p className="enname">CHISA FURUKAWA</p>
              <p className="schoolname">
                愛知工業大学情報科学部
                <br />
                情報科学科メディア情報専攻3年生
              </p>
            </div>
            <div className="jikoshokai">
              <p>
                
                私はメディア情報研究会というサークルに所属し、大学生活に一番力を入れました。
                <br/>
                活動内容は外部の企業や団体から依頼を受けてプロジェクションマッピングなどの映像、コンテンツ制作や研究などを行なっており、実践的なスキルを身につけることが出来ました。この経験は私にとってスキルだけではなく人間として成長でき、今しかできない貴重な体験だと感じています。
                <br/>
                また大学の授業内では、Webサイト制作、3DCGモデリング、映像制作、プログラミングなど幅広く色々な事を学びました。
                今後も様々なスキルを伸ばしていきたいです。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
