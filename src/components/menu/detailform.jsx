import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sendinof from '../sendinof';

let arr = [];
let mailsend_UI = [];
let mailsend_Service = [];

function Detailform() {
  useEffect(() => {
    infomation();
    uipages();
    desings();
    signins();
    admins();
    uploads();
    communitys();
    advance_actions();
    service_platforms();
    alram_pushs();
    social_techs();
    native_techs();
    item_lists();
    payments();
    api_crawlings();
    document_extractions();
    Overseass();
    etcs();
  }, []);

  let [priced, setPriced] = useState(0); //토탈 값
  let [priceui, setPriceui] = useState(0); // ui값
  let [priceservice, setPriceservice] = useState(0); //서비스 플랫폼값
  let [info, setInfo] = useState([]);
  let [uipage, setUipage] = useState([]);
  let [desing, setDesing] = useState([]);
  let [admin, setAdmin] = useState([]);
  let [upload, setUpload] = useState([]);
  let [community, setCommunity] = useState([]);
  let [advance_action, setAdvance_action] = useState([]);
  let [service_platform, setService_platform] = useState([]);
  let [signin, setSignin] = useState([]);
  let [alram_push, setAlram_push] = useState([]);
  let [social_tech, setSocial_tech] = useState([]);
  let [native_tech, setNative_tech] = useState([]);
  let [item_list, setItem_list] = useState([]);
  let [payment, setPayment] = useState([]);
  let [api_crawling, setApi_crawling] = useState([]);
  let [document_extraction, setDocument_extraction] = useState([]);
  let [Overseas, setOverseas] = useState([]);
  let [etc, setEtc] = useState([]);

  let [mailsendname, setMailsendname] = useState('');
  let [mailsendcontent, setMailsendcontent] = useState('');
  let [mailsendAll, setMailsendAll] = useState([]);

  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 200) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  const infomation = () => {
    axios.get('/api/platform').then((res) => {
      setInfo(res.data);
    });
  };

  const uipages = () => {
    axios.get('/api/ui').then((res) => {
      setUipage(res.data);
    });
  };

  const desings = () => {
    axios.get('/api/desing').then((res) => {
      setDesing(res.data);
    });
  };

  const admins = () => {
    axios.get('/api/admin').then((res) => {
      setAdmin(res.data);
    });
  };

  const uploads = () => {
    axios.get('/api/upload').then((res) => {
      setUpload(res.data);
    });
  };

  const communitys = () => {
    axios.get('/api/community').then((res) => {
      setCommunity(res.data);
    });
  };

  const advance_actions = () => {
    axios.get('/api/advance_action').then((res) => {
      setAdvance_action(res.data);
    });
  };

  const service_platforms = () => {
    axios.get('/api/service_platform').then((res) => {
      setService_platform(res.data);
    });
  };

  const signins = () => {
    axios.get('/api/signin').then((res) => {
      setSignin(res.data);
    });
  };

  const alram_pushs = () => {
    axios.get('/api/alram_push').then((res) => {
      setAlram_push(res.data);
    });
  };

  const social_techs = () => {
    axios.get('/api/social_tech').then((res) => {
      setSocial_tech(res.data);
    });
  };

  const native_techs = () => {
    axios.get('/api/native_tech').then((res) => {
      setNative_tech(res.data);
    });
  };

  const item_lists = () => {
    axios.get('/api/item_list').then((res) => {
      setItem_list(res.data);
    });
  };

  const payments = () => {
    axios.get('/api/payment').then((res) => {
      setPayment(res.data);
    });
  };

  const api_crawlings = () => {
    axios.get('/api/api_crawling').then((res) => {
      setApi_crawling(res.data);
    });
  };

  const document_extractions = () => {
    axios.get('/api/document_extraction').then((res) => {
      setDocument_extraction(res.data);
    });
  };

  const Overseass = () => {
    axios.get('/api/Overseas').then((res) => {
      setOverseas(res.data);
    });
  };

  const etcs = () => {
    axios.get('/api/etc').then((res) => {
      setEtc(res.data);
    });
  };

  const onChangeHandlerRadioUi = (item, e) => {
    if (e.target.checked) {
      let num = item.price;
      mailsend_UI = item;
      setPriceui((priceui = num));
    } else {
      console.log('아직아무것도');
    }
  };

  const onChangeHandlerRadioService = (item, e) => {
    let num = item.price;
    mailsend_Service = item;
    setPriceservice((priceservice = num));
  };

  const onChangeHandler = (item, e) => {
    let mailsend_name = item.name;
    let mailsend_content = item.content;
    let mailsend_All = item;
    let num = item.price;

    if (e.target.checked) {
      setPriced((priced = priced + num));
      setMailsendname(mailsend_name);
      setMailsendcontent(mailsend_content);
      setMailsendAll(mailsend_All);
      arr.push(item);
    } else {
      setPriced((priced = priced - num));
      setMailsendname('');
      setMailsendcontent('');
      setMailsendAll([]);
      arr.splice(arr.indexOf(item), 1);
    }
  };

  //label(htmlfor 값과 input id값이 같을때 넣었지만 덮어씌워져서 작동을 안했음(지워서해결))
  const arrayMap = (array) => {
    return array.map((item, index) => (
      <div className="content" key={index}>
        <label onChange={(e) => onChangeHandler(item, e)}>
          <div className="mm_1">
            <div className="main_title">
              <h5 className="content-name">{item.name}</h5>
              <input className="checkbox" type="checkbox" />
            </div>
            <h4 className="content-price">
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </h4>
            <span className="content-comment">{item.content}</span>
          </div>
        </label>
      </div>
    ));
  };

  const uiMap = (array) => {
    return array.map((item, index) => (
      <div className="content" key={index}>
        <label onChange={(e) => onChangeHandlerRadioUi(item, e)}>
          <div className="mm_1">
            <div className="main_title">
              <h5 className="content-name">{item.name}</h5>
              <input
                name="radio-btn"
                className="checkbox"
                id={item.idx}
                type="radio"
                data="esc"
              />
            </div>
            <h4 className="content-price">
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </h4>
            <span className="content-comment">{item.content}</span>
          </div>
        </label>
      </div>
    ));
  };

  const serviceMap = (array) => {
    return array.map((item, index) => (
      <div className="content" key={index}>
        <label onChange={(e) => onChangeHandlerRadioService(item, e)}>
          <div className="mm_1">
            <div className="main_title">
              <h5 className="content-name">{item.name}</h5>
              <input
                name="radio-btn"
                className="checkbox"
                id={item.idx}
                type="radio"
              />
            </div>
            <h4 className="content-price">
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
            </h4>
            <span className="content-comment">{item.content}</span>
          </div>
        </label>
      </div>
    ));
  };

  return (
    <>
      <div className="box-blocks">
        <Sendinof
          arrui={mailsend_UI}
          arrservice={mailsend_Service}
          arrtotal={arr}
          sendmailall={mailsendAll}
          sendmailname={mailsendname}
          sendmailcontent={mailsendcontent}
          pricedui={priceui}
          pricedtotal={priced}
          priceservice={priceservice}
        />
        <div className="item-lists">
          <div className="caution">
            * 예상 견적은 고객사가 구현하고자 하는 기능들을 알아보기 위한
            수단입니다.<br></br>* 개발문의 후 시스너가 정확한 견적 산출을 위해
            도움을 드리니, 희망하시는 기능을 추가해보세요.
          </div>
          <h1 className="main-form-title">플랫폼 및 개발언어</h1>
          <div className="item-list">{arrayMap(info)}</div>
          <h1 className="main-form-title">구현할 UI 페이지 분량</h1>
          <div className="item-list">{uiMap(uipage)}</div>
          <h1 className="main-form-title">디자인</h1>
          <div className="item-list">{arrayMap(desing)}</div>
          <h1 className="main-form-title">관리자/업체 기능 구현</h1>
          <div className="item-list">{arrayMap(admin)}</div>
          <h1 className="main-form-title">편집/업로드 기능</h1>
          <div className="item-list">{arrayMap(upload)}</div>
          <h1 className="main-form-title">O2O/커뮤니티 기능 관련</h1>
          <div className="item-list">{arrayMap(community)}</div>
          <h1 className="main-form-title">고급 기능</h1>
          <div className="item-list">{arrayMap(advance_action)}</div>
          <h1 className="main-form-title">서비스를 운영할 서버 플랫폼</h1>
          <div className="item-list">{serviceMap(service_platform)}</div>
          <h1 className="main-form-title">회원가입/로그인</h1>
          <div className="item-list">{arrayMap(signin)}</div>
          <h1 className="main-form-title">알림 기능 관련</h1>
          <div className="item-list">{arrayMap(alram_push)}</div>
          <h1 className="main-form-title">소셜 기능 관련</h1>
          <div className="item-list">{arrayMap(social_tech)}</div>
          <h1 className="main-form-title">네이티브 기능 관련</h1>
          <div className="item-list">{arrayMap(native_tech)}</div>
          <h1 className="main-form-title">아이템 목록/상세 관련</h1>
          <div className="item-list">{arrayMap(item_list)}</div>
          <h1 className="main-form-title">결제 관련</h1>
          <div className="item-list">{arrayMap(payment)}</div>
          <h1 className="main-form-title">외부 API 및 크롤링 관련</h1>
          <div className="item-list">{arrayMap(api_crawling)}</div>
          <h1 className="main-form-title">문서 추출 관련</h1>
          <div className="item-list">{arrayMap(document_extraction)}</div>
          <h1 className="main-form-title">국제화 관련</h1>
          <div className="item-list">{arrayMap(Overseas)}</div>
          <h1 className="main-form-title">기타</h1>
          <div className="item-list">{arrayMap(etc)}</div>

          {/* {arrayMap(uipages)} */}
        </div>
      </div>
      <div className="wrap">
        <button
          className={BtnStatus ? 'topBtn active' : 'topBtn'}
          onClick={handleTop}
        >
          TOP
        </button>
      </div>
    </>
  );
}

export default Detailform;
