import React from 'react';
import './admin_sidbar.css';
import faker from "faker/locale/ko";

faker.seed(100);

const Adminstrator_sidbar = () => {
    const columns = ["제목", "가격", "내용"];

    const datas = Array(20)
    .fill()
    .map(() => ({
        name: faker.name.lastName() + faker.name.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    }))


    return (
        <>
            <h1 className="admin-page-title">관리자 페이지</h1>
            <section>
                <nav className="navbar">
                        <i className="fas fa-folder-open"></i>
                        <span>카테고리</span>
                        <ul className="hide-list">
                            <button>
                                <li className="list-name">플랫폼</li>
                            </button>
                            <button>
                                <li className="list-name">ui페이지</li>
                            </button>
                            <button>
                                <li className="list-name">디자인</li >
                            </button>
                            <button>
                                <li className="list-name">관리자/업체 기능 구현</li >
                            </button>
                            <button>
                                <li className="list-name">편집/업로드 기능</li >
                            </button>
                            <button>
                                <li className="list-name">O2O/커뮤니티 기능 관련</li >
                            </button>
                            <button>
                                <li className="list-name">고급 기능</li >
                            </button>
                            <button>
                                <li className="list-name">서비스를 운영할 서버 플랫폼</li >
                            </button>
                            <button>
                                <li className="list-name">플랫폼</li >
                            </button>
                            <button>
                                <li className="list-name">회원가입/로그인</li >
                            </button>
                            <button>
                                <li className="list-name">알림 기능 관련</li >
                                </button>
                            <button>
                                <li className="list-name">소셜 기능 관련</li >
                            </button>
                            <button>
                                <li className="list-name">네이티브 기능 관련</li ></button>
                            <button>
                                <li className="list-name">아이템 목록/상세 관련</li ></button>
                            <button>
                                <li className="list-name">결제 관련</li ></button>
                            <button>
                                <li className="list-name">외부 API 및 크롤링 관련</li ></button>
                            <button>
                                <li className="list-name">문서 추출 관련</li ></button>
                            <button>
                                <li className="list-name">국제화 관련</li></button>
                            <button>
                                <li className="list-name">기타</li></button>
                        </ul>
                </nav>
                <h1>항목 추가하기</h1>
                <main className="main-item">
                    <p className="title-home">
                        <span className="title">제목</span>
                        <span className="title">가격</span>
                        <span className="title">내용</span>
                    </p>
                    <ul>
                        <li>111</li>
                        <li>111</li>
                        <li>111</li>
                    </ul>
                </main>
            </section>
            
        </>
    );

};

export default Adminstrator_sidbar;