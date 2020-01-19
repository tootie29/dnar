import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import img1 from '../images/img-1.png';
import questionMark from '../images/question-mark.png';
import star from '../images/STAR.png';
import pic1 from '../images/PIC-1.png';
import pic2 from '../images/PIC-2.png';
import pic3 from '../images/PIC-3.png';
import pic4 from '../images/PIC-4.png';
import testi1 from '../images/PIC-TESTIMONI-1.png';
import testi2 from '../images/PIC-TESTIMONI-2.png';
import testi3 from '../images/PIC-TESTIMONI-3.png';
import danger from '../images/DANGER.png';
import sijil1 from '../images/SIJIL-KKM-1.png';
import sijil2 from '../images/SIJIL-KKM-2.png';
import sijil3 from '../images/SIJIL-KKM-3.png';
import sijil4 from '../images/SIJIL-KKM-4.png';
import sijil5 from '../images/SIJIL-KKM-5.png';

export default class Home extends Component {
    render() {
        return (
            <div>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="banner">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={img1} className="img-fluid" alt="banner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-1 my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1 className="content-header helvetica-bold text-center mb-5 purple">
                                    &ldquo;Cara Cantik Tanpa Membinasakan Kulit Wajah - JAMINAN 100% WANG DIKEMBALIKAN!&rdquo;
                                    </h1>
                                    <h3 className="subtitle helvetica-bold text-center mb-0">Kami akan tunjukkan kepada anda cara Cantik Tanpa<br /> Membinasakan Kulit Wajah secara semulajadi dan membantu<br /> ribuan wanita memperoleh hasil yang sama.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-2 my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 letter-content">
                                    <p className="helvetica-light">Sayangku,</p>
                                    <p className="helvetica-light">Jika anda mencari cara untuk mengatasi masalah jerawat, jeragat, parut, bintik hitam, kulit gelap dan kusam secara semulajadi dan mudah tanpa membinasakan kulit wajah, maka ini adalah laman web paling penting yang pernah anda baca.</p>
                                    <p><strong>Tetapi pertama sekali, izinkan kami tanya anda…</strong></p>
                                    <p><strong>Adakah Anda...</strong></p>
                                </div>
                                <div className="col-md-12">
                                    <ul className="list-group letter-list">
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                                Merasa rendah diri kerana tona kulit wajah kusam, gelap atau tidak sekata?
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                                Malu berhadapan dengan orang ramai kerana masalah kulit wajah yang dialami?
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                                Penat berhabis ribuan ringgit membeli produk kecantikan tetapi masih tidak berkesan?
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                                Menggunakan produk yang mengakibatkan kulit wajah kering dan mengelupas?
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                                Mencuba pelbagai cara dari rawatan laser hingga produk yang mahal untuk merawat kulit wajah tetapi hasilnya masih tidak memuaskan?
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                                Sentiasa memakai makeup untuk menyorokkan masalah kulit wajah dari orang lain?
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                                Malu untuk bergambar tanpa filter kerana anda benci melihat wajah sendiri di cermin?
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-3 my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;Anda Tidak Keseorangan!&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12">
                                    <p className="helvetica-light">Jika anda menjawab YA kepada mana-mana soalan di atas, ketahuilah anda tidak keseorangan.</p>
                                    <p className="helvetica-light">Tetapi, perkara terburuk adalah segala jenis maklumat pengiklanan yang mengelirukan.</p>
                                    <p className="helvetica-light">Sebagai contoh, tahukah anda bahawa produk kecantikan yang menjanjikan hasil pantas mengandungi bahan-bahan berbahaya seperti merkuri, tretinoin, dan hydroquinon yang boleh menyebabkan kerosakan pada kulit, saraf, otak, ginjal dan janin.</p>
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={pic1} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                    <p className="helvetica-light">Jangan terkejut kalau kami beritahu bahawa sesetengah produk yang mengandungi bahan kimia beracun ini tidak menunjukkan kesan negatifnya ke atas kulit pengguna dalam jangka masa pendek.</p>
                                    <p className="helvetica-light">Tetapi kesan buruk ini biasanya dapat dilihat selepas penggunaan berpanjangan.</p>
                                    <p className="helvetica-light">Jadi kenapa anda mahu risikokan kulit wajah anda dengan menggunakan produk yang mengandungi bahan-bahan terlarang ini?</p>
                                    <p className="helvetica-light">Ingat! Wajah adalah aset paling berharga buat seorang wanita seperti anda.</p>
                                    <p className="helvetica-light">Jadi, jangan korbankan kulit wajah anda dengan sembarangan produk.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-4 my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;Cantik Tanpa Membinasakan Kulit Wajah&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12">
                                    <p className="helvetical-light">Sekarang, tiba masanya untuk kami memperkenalkan kepada anda, <strong>DNARS GOLD.</strong></p>
                                    <p className="helvetica-light">Revolusi set penjagaan wajah dengan gabungan teknologi Nano dan bahan semulajadi premium.</p>
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={pic2} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={pic3} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                    <p className="helvetica-bold">Anda akan dapati...</p>
                                    <ul className="list-group letter-list">
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={star} alt="list" width="40"/>
                                                Cara cantik tanpa membinasakan kulit wajah
                                            </LazyLoad>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={star} alt="list" width="40"/>
                                                Cara selamat mengatasi masalah jerawat, jeragat, parut dan bintik hitam
                                            </LazyLoad>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={star} alt="list" width="40"/>
                                                Cara sihat mendapatkan kulit wajah yang lebih cerah
                                            </LazyLoad>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={star} alt="list" width="40"/>
                                                Bahan semulajadi yang berkesan untuk mengatasi masalah kulit wajah
                                            </LazyLoad>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={star} alt="list" width="40"/>
                                                Suami dan rakan memuji kulit anda kelihatan seakan dilahirkan semula
                                            </LazyLoad>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={star} alt="list" width="40"/>
                                                Dan… Banyak Lagi!
                                            </LazyLoad>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-5 my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;Kecantikan Berganda, Kejelitaan Luar Biasa&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12">
                                    <p className="helvetica-light"><strong>DNARS GOLD</strong> merupakan produk penjagaan wajah yang dicipta khas untuk mengembalikan kecantikan dan keyakinan diri wanita Malaysia.</p>
                                    <p className="helvetica-light">Dengan misi membantu wanita tampil cantik tanpa membinasakan kulit wajah, <strong>DNARS GOLD</strong> diformulasikan dengan bahan semulajadi premium yang terpilih dan diproses melalui teknologi tinggi dengan pati minyak asli dan pure essential oil bagi menyerlahkan lagi kejelitaan dan kecantikan berganda kulit wajah.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-6 my-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;Transformasi Kulit Wajah Cantik & Sihat Secara Semulajadi&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12">
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={pic4} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-6 my-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;Apa Kata Pengguna DNARS GOLD?&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12">
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={testi1} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={testi2} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={testi3} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-7 my-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 mb-5">
                                    <h2 className="content-header helvetica-bold text-center danger penting">
                                        &ldquo;PERINGATAN PENTING!&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12 mb-5">
                                    <ul className="list-group letter-list ">
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={danger} alt="list" width="40"/>
                                                <strong>DNARS GOLD tidak mengandungi sebarang bahan kimia yang berbahaya atau bahan pengawet tersembunyi. Jadi ia terbukti selamat dan lembut untuk semua jenis kulit.</strong>
                                            </LazyLoad>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={danger} alt="list" width="40"/>
                                                <strong>DNARS GOLD BUKAN PRODUK TIMBANG KILO kerana ia diproses mengikut SOP yang ditetapkan mengikut standard GMP.</strong>
                                            </LazyLoad>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={sijil1} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={sijil2} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={sijil3} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={sijil4} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                    <LazyLoad height={400} offset={[-100, 0]} debounce={500}>
                                        <img src={sijil5} alt="1" className="img-fluid mb-3"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-8 my-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;Biarkan DNARS GOLD Berbicara Pada Kulit Wajah Anda&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12">
                                    <p><strong>Sekarang, jika anda rasakan DNARS GOLD luar biasa, biar kami tanya anda…</strong></p>
                                    <p><strong>Adakah anda bersedia untuk…</strong></p>
                                    <ul className="list-group letter-list">
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                            <strong>Memperoleh kulit wajah yang cantik, cerah dan sihat?</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                            <strong>Mendapatkan kembali keyakinan diri untuk melakukan aktiviti yang anda gemari?</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                            <strong>Akhirnya, mendedahkan kulit wajah yang cantik dan sempurna terhadap seluruh dunia?</strong>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-start align-items-start">
                                            <LazyLoad height={50} offset={[-50, 0]} debounce={500}>
                                                <img src={questionMark} alt="list" width="40"/>
                                            </LazyLoad>
                                            <strong>Mendapatkan hidup anda semula, yang bebas daripada rasa takut dan cemas akan masalah kulit wajah?</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-9 my-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;Inilah Masanya Untuk Mendapatkan Kembali Kulit Wajah Anda Yang Cantik&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12">
                                    <p className="helvetica-light">Ingat, sebelum ini kami juga seperti anda. Jadi kami faham apa yang anda rasakan sekarang.</p>
                                    <p className="helvetica-light">Ya, betul. Kamilah orang nya. Sama seperti anda yang hingga kan pada satu tahap berasa buntu dan kecewa berseorangan… dihina… dan malu untuk keluar rumah.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-10 my-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;Pelaburan Selamat Untuk Kulit Wajah Cantik, Cerah & Sihat&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12">
                                    <p><strong>Sekarang, mari kita berbincang...</strong></p>
                                    <p className="helvetica-light">Berapakah yang anda sanggup bayar untuk mendapatkan kulit wajah cantik, cerah & sihat secara SELAMAT? Ya, secara selamat tanpa membinasakan kulit wajah anda dengan bahan-bahan berbahaya.</p>
                                    <p><strong>Bayangkan bagaimana hidup anda setelah impian anda untuk mendapatkan kulit wajah cantik, cerah & sihat tercapai yang sekaligus meningkatkan keyakinan diri anda untuk lebih berjaya dalam hidup. Mudah mendapat pasangan, mudah mendapat kerja yang anda idamkan dan mudah bergaul dengan orang ramai kerana kecantikan anda dikagumi oleh setiap orang!</strong></p>
                                    <p className="helvetica-light">Bagaimana jika impian ini boleh menjadi kenyataan pada bila-bila masa sahaja yang anda mahukan?</p>
                                    <p className="helvetica-light">Sekarang, biar kami tanya anda. Berapa yang anda sanggup bayar untuk mendapatkan kulit wajah yang cantik, cerah dan sihat sekaligus meningkatkan keyakinan diri anda untuk lebih berjaya mencapai impian hidup anda?</p>
                                    <p className="helvetica-light">Adakah anda sanggup membayar RM500? RM1,000? Atau anda lebih sanggup membayar RM3,000 untuk rawatan laser?</p>
                                    <p className="helvetica-light">Jika anda tanya kami soalan ini beberapa tahun lepas, berapa kami sanggup bayar untuk mendapatkan kulit wajah yang cantik seakan dilahirkan semula yang kami perolehi sekarang, kami akan jawab… TAK TERNILAI!</p>
                                    <p className="helvetica-light">Bagaimana jika kami katakan yang anda hanya perlu laburkan <span className="danger">RMXX</span> untuk mendapatkan Set <strong>DNARS GOLD</strong> ini?</p>
                                    <p><span className="danger">HANYA RMXX?</span></p>
                                    <p className="helvetica-light">Ya, itulah pelaburan sekali seumur hidup yang akan merubah hidup anda tidak lama lagi dan selama-lamanya!</p>
                                    <p className="helvetica-light">Kami yakin penyelesaian yang kami tawarkan ini akan membantu anda untuk mendapatkan kulit wajah idaman yang cantik, cerah dan sihat secara mudah dan semulajadi tanpa membinasakan kulit wajah anda. Kami yakin 100%!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-11 my-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;JAMINAN PULANGAN WANG 100%&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12">
                                    <p className="helvetica-light">Kami mahu anda selesa untuk mencuba set penjagaan wajah DNARS GOLD. Sebab itu, walaupun anda akan dapat melihat perubahan seawal 2 minggu, kami akan benarkan anda untuk mencuba selama 30 hari - iaitu 1 bulan penuh untuk melihat sama ada hasilnya berbaloi dengan pelaburan sebanyak RMXX yang akan anda buat hari ini.</p>
                                    <p className="helvetica-light">Jika atas sebab apa jua sekalipun, anda tidak gembira dengan hasilnya, kami tidak mahu wang anda! Hubungi terus (ke emel yang tertera di bawah) dalam masa sebulan daripada tarikh pembelian dan kami akan pastikan wang anda dikembalikan segera.</p>
                                    <p className="helvetica-light">Bayangkan betapa ruginya syarikat farmaseutikal, doktor dan pakar dermatologi sekiranya mereka memberi jaminan sebegini.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-11 my-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;JAMINAN PULANGAN WANG 100%&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12">
                                    <p className="helvetica-light">Kami mahu anda selesa untuk mencuba set penjagaan wajah DNARS GOLD. Sebab itu, walaupun anda akan dapat melihat perubahan seawal 2 minggu, kami akan benarkan anda untuk mencuba selama 30 hari - iaitu 1 bulan penuh untuk melihat sama ada hasilnya berbaloi dengan pelaburan sebanyak RMXX yang akan anda buat hari ini.</p>
                                    <p className="helvetica-light">Jika atas sebab apa jua sekalipun, anda tidak gembira dengan hasilnya, kami tidak mahu wang anda! Hubungi terus (ke emel yang tertera di bawah) dalam masa sebulan daripada tarikh pembelian dan kami akan pastikan wang anda dikembalikan segera.</p>
                                    <p className="helvetica-light">Bayangkan betapa ruginya syarikat farmaseutikal, doktor dan pakar dermatologi sekiranya mereka memberi jaminan sebegini.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-12 my-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 mb-5">
                                    <h2 className="content-header helvetica-bold text-center purple">
                                        &ldquo;BERTINDAK SEKARANG & DAPATKAN SET PENJAGAAN WAJAH DNARS GOLD !&rdquo;
                                    </h2>
                                </div>
                                <div className="col-md-12 text-center">
                                    <a href="http://javascript" className="btn btn-danger btn-big">Saya nak order sekarang!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
                <LazyLoad height={200} offset={[-100, 0]} debounce={500}>
                    <div className="content content-13 my-5">
                        <div className="container">
                            <div className="row disclamer">
                                <div className="col-md-12">
                                    <p className="mb-0"><strong>Disclamer</strong></p>
                                    <p className="helvetica-light"><i>Tindak balas pada kulit wajah mungkin berbeza mengikut keadaan kulit wajah individu. INGAT! Produk kecantikan terbaik adalah yang diperbuat daripada bahan semulajadi, lulus KKM, terbukti berkesan dan tidak menjanjikan hasil yang terlampau pantas.</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </LazyLoad>
            </div>
        )
    }
}
