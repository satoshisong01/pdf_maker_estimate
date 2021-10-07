import React, { Component } from 'react';
import Sendinof from '../sendinof';


class Detailform extends Component {
    state ={
        totalsss:0,
        platform:[
            {id:1, name: "반응형웹", price: 2000000, comment: "PC와 모바일 브라우져에 대략적인 대응, 인터넷 익스플로러는 대응하지 않습니다"},
            {id:2, name: "모바일웹앱", price: 4000000, comment: "앱스토어에 출시를 위한 모바일 최적화. 아이폰/안드로이드 패키징, 앱스토어 출시 가이드"},
            {id:3, name: "루비온레일즈(추천)", price: 0, comment: "루비온레일즈의 개발 생산성이 가장 좋기 때문에 개발 비용이 절감됩니다"},
            {id:4, name: "파이썬장고", price: 80000000, comment: "장고로 개발시 개발 시간이 좀더 소요되지만 개발자 채용/인수인계가 용이합니다"},
            {id:5, name: "노드JS", price: 80000000, comment: "노드로 개발시 개발 시간이 좀더 소요되지만 개발자 채용/인수인계가 용이합니다"},
        ],
        uipages:[
            {id:6, name: "10 페이지 이하", price: 40000000, comment: "부분적인 기능 추가시"},
            {id:7, name: "20 페이지 이하", price: 80000000, comment: "MVP 버젼"},
            {id:8, name: "30 페이지 이하", price: 120000000, comment: "베타 버젼"},
            {id:9, name: "40 페이지 이하", price: 160000000, comment: "정식 버젼"},
            {id:10, name: "50 페이지 이하", price: 200000000, comment: "확장 버젼"},
            {id:11, name: "60 페이지 이하", price: 240000000, comment: "고도화 버젼"},
        ],
    }

    onChangeHandler = (total ,e) => {
        let num = total.price;
        if(e.target.checked) {
            this.setState({totalsss: this.state.totalsss + num})
        }
        else{
            this.setState({totalsss: this.state.totalsss - num})
        }
}
    render() {
        const platform = this.state.platform;
        const uipages = this.state.uipages;
    
        const arrayMap = (array) => {
            return array.map((total, index)=>(
                <>
                    <div className="content" key={index}>
                        <label htmlFor={total.id} onChange={(e) => this.onChangeHandler(total, e)}>
                            <div className="mm_1">
                                <div className="main_title">
                                <h5 className="content-name">{total.name}</h5>
                                    <input type="checkbox" id={total.id}/>
                                </div>
                                <h4 className="content-price">{total.price}원</h4>
                                <div className="content-comment">
                                    {total.comment}
                                </div>
                            </div>
                        </label>
                    </div>
                </>
                )
            );
        };
        
        return (
            <> 
                <Sendinof priced ={this.state.totalsss}/>
                <h1 className="main-form-title">플랫폼 및 개발언어</h1>
                {arrayMap(platform)}
                <h1 className="main-form-title">UI Pages</h1>
                {arrayMap(uipages)}
            </>
        );
    }
}

export default Detailform;



    // console.log(info);
    
    // const onChangeHandler = (total ,e) => {
    //     let num = total.price;
    //     if(e.target.checked) {
    //         totalsss = info.data.price + num
    //     }
    //     else{
    //         totalsss = info.data.price - num
    //     }
    // }

    //     const platform = info.data;
    //     // const uipages = state.uipages;

    //     const arrayMap = (array) => {
    //         return array.map((total, index)=>(
    //             <>
    //                 <div className="content" key={index}>
    //                     <label htmlFor={total.id} onChange={(e) => onChangeHandler(total, e)}>
    //                         <div className="mm_1">
    //                             <div className="main_title">
    //                             <h5 className="content-name">{total.name}</h5>
    //                                 <input type="checkbox" id={total.id}/>
    //                             </div>
    //                             <h4 className="content-price">{total.price}원</h4>
    //                             <div className="content-comment">
    //                                 {total.comtent}
    //                             </div>
    //                         </div>
    //                     </label>
    //                 </div>
    //             </>
    //             )
    //         );
    //     };

//콘솔로그 두번 출력 (조건 넣어서 해결)

    // useEffect(()=> {
    //     //     if(info && info[0]) {
    //     //         console.log(info[0].idx, 2222);
    //     //     }
    //     // }, [info]);