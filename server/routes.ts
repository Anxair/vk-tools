import * as express from 'express';
import {getMusic} from './server';

export const routes = express.Router();

//5920343
routes.get('/user/get-audio/:id', (req, res) => {
  // let id = req.params.id;
  // getMusic(id).then(value => {
  // res.send(value);
  //  }).catch(err => {
  //    console.log('❌ ' + err.message);
  //    process.exitCode;
  // });
  res.send(tracks);
});


const tracks = [
  {
    mp3: 'https://cs9-12v4.vkuseraudio.net/p5/dbd3dc5f640968.mp3?extra=IK6GoyBwyVrFAqK_A7SPUeTdwsCAB2vTMwQf5bwnyg3ekuEyOgcvlQnrwX8sZzlKa9pYzxnNcHRcw0xcEZUxT1QvYwtijLhI4oaVPu06Jx0zj2czTSqclGjkVHCUwf2r28DjW7yDiDl-2VmLcD8&long_chunk=1',
    title: 'Танго-карантин',
    author: 'Елена Войнаровская',
    cover: 'https://sun9-61.userapi.com/c858220/v858220377/1c0be0/uPS8RM6TMpE.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p9/e28ff9a77116c2.mp3?extra=ZtRyLpn5q9W3_FQFrPc-3DTZWuUZrQ5Ltew5SPvUBXQ9lkwr68iELuIiIq6saM8p8CWGG0fHzWzxUXIj0rdJpG7eym4g10Qo_y8XN-Qnjb_7pyBY_K5iAiXztuwl4vhPYYtrzZBKv8KeMZE_gyw&long_chunk=1',
    title: 'Верыць',
    author: 'Елена Войнаровская/The Клюквінs',
    cover: ''
  },
  {
    mp3: 'https://cs9-1v4.vkuseraudio.net/p2/c294c6caa93612.mp3?extra=2D8t9L_yEjtU3uBLAXP4WD9RNWvE5dXwj5kjd9kBFfjdQHlmogcWyW0M4F8D8MGjX6Dn0rIozNAMyaSh3FqOfZmuZxKufTRgy1Ts3d5FM5w8agrRlO0zq-G6WKDOYeb7KWb7zyRf-1EHzXrwTSc&long_chunk=1',
    title: 'Shape of My Heart',
    author: 'Instrumental',
    cover: 'https://sun9-26.userapi.com/c854424/v854424488/6b688/O71ynmdrPeE.jpg'
  },
  {
    mp3: 'https://cs9-5v4.vkuseraudio.net/p1/dbac9e0f62992c.mp3?extra=Mh-brUXI57QiTJ3ThR4z-RbiXmdQ_tFeEbgZ1JIyuioB-xDvKYgjZd3Ro-b3fBx1FBzhNEph84e72PHTfR0RKMxeak-7QLMgcRQqn7Bxdf6P1B7KiECcnPE6VFq2C83KG9MzmK3cTLvJa6DeZjU&long_chunk=1',
    title: 'This Land',
    author: 'Ханс Циммер, Lebo M.',
    cover: 'https://sun9-6.userapi.com/c855436/v855436243/97a90/dIzEuddlLWk.jpg'
  },
  {
    mp3: 'https://cs9-4v4.vkuseraudio.net/p2/43147998867d05.mp3?extra=cgV3nKpkCX6Z02Pncf7LGvx8xLt9WMHzRWQApCW_4wg18KgrnvyqsbNyeLdpx4csdp_wOzHlTpQzyq_NJEIkYzqVmypX_ELz5t1ZCv8aIcMuNN-NCz0kjlNGYY6PlVbMzKnU0p1DP2Doh1yqcuQ&long_chunk=1',
    title: 'Main Theme (From &quot;Schindler&#39;s List&quot;)',
    author: 'The City of Prague Philharmonic Orchestra',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c855424/v855424045/1a24dc/Xkhxrj39H1E.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p20/d805f38c4469d9.mp3?extra=ylD_ni3Jhm4e4AYWn5W8N43i7jzH3rPC_9i5bVVIUKQtj5AKsI8YDBhfagZumiLfMtJd1FcWhxbcAu-WneyJUliIMgEA7BLlfuEu13WnuT0UnvATQfU4SumhdNUIF3ubsVNybA0xzLjYLw5AsOQ&long_chunk=1',
    title: 'River Flows in You',
    author: 'Piano Instrumental',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c638817/v638817446/4caeb/9StiDLx_D04.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p13/9acf7de7868624.mp3?extra=iF-F52cQJzO94nkr_isNjXtpRZav_pYmb86zsCgEKsslafzwQeFajpI355I4iwIAGZLgjp77aoFuSNgtaeSOzAVKVDDFnxUftwSLIAEZbg47rMxrX0rSduHE6w0i9m_5q0DLiYvRWG_cb10T60E&long_chunk=1',
    title: 'Beethoven&#39;s 5 Secrets',
    author: 'The Piano Guys',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c855028/v855028853/218b11/wMRj0xK_8R4.jpg'
  },
  {
    mp3: 'https://cs9-3v4.vkuseraudio.net/p3/1d430efa9a822f.mp3?extra=ZUGshNluIkD3Pvb0CXLis_VXgRNIZbJUDCJwc9rPIPha1Pbt7F_gFb6ykRviV0CXb3BTY--L9B_gJWqpRGAWw0fpv5Bpx55MhICPjU9wCufPf2rmRnVhCkCXpC73gWa4GLOSVVJBGxPMYNFi29U&long_chunk=1',
    title: 'May It Be (Lord Of The Rings)',
    author: 'Rachel O&#39;Donnell',
    cover: 'https://sun9-17.userapi.com/xK-oRzkwcXsQuLTpxxVEOk1QFkKrjjdPoWDTSA/VTlyZhVgIgg.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p12/11e3892a6f75e7.mp3?extra=OtHAm22kiCGjC5F6cn5D3LP4K0XvYwWGGcgP6BkHSLEWxJs1nynXlrIUsMxnkkbPEJ01zNm8gYDAoNgZqXpi7WM5o2ES0Ie_UvpnQJjjBujJ52tIhs4Sdc_tRXffly3x99AiB_anfnJ_6Bgi_kw&long_chunk=1',
    title: 'The Phantom Of The Opera',
    author: 'Andrew Lloyd Webber, Gerard Butler, Emmy Rossum',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c850024/v850024101/e0017/mkW9-TIAuuE.jpg'
  },
  {
    mp3: 'https://cs9-9v4.vkuseraudio.net/p3/099f5ee7696198.mp3?extra=KwFBqFMO_3RuyiPLtRvAmWmvGeQA6CchzEczcJTTgQ-7zcF2TwKOf7Egg9MmT42zwfOeEr9ecZXbJkjYdFYU68y8cofdT-udi_X65qzL8J2U8dM9XoAumuLKRMRST1LBN-mjiz8xsRI5lTGLF6s&long_chunk=1',
    title: 'Odissea Veneziana',
    author: 'Benjamin Richter',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c857236/v857236142/2040bf/Yzru8wQZvjY.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p2/50e1e3c43b7ed6.mp3?extra=Xj34TdWDqrjjE1P7HIaaCAeagyrdzYo-XQwrq_hfqm7roVQkMhM2nGKoE-MshvAmR1-KlXGrMbOjMZUKq3AdfJkZPjlwL5rngJwiMpG51c9le8BjlnAfFoXcM_n-yrS5sCqtNzpNc1_cj0NnLbk&long_chunk=1',
    title: 'Rain, in Your Black Eyes',
    author: 'Ezio Bosso',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c849136/v849136227/da032/rJ25BU5X0ds.jpg'
  },
  {
    mp3: 'https://cs9-6v4.vkuseraudio.net/p3/06edf1899472d2.mp3?extra=Ei-JJTaTRyF_YXfTY3rikoP6b4LtysKn5JuS9fc5VdMRo6SL7ZGJEgEFyC16SkeJfez6bzieC-7IlM5xuBq7Ft6q2IckogpXzuhXld1ezDUbq5Je3H1QAIFLdewpVpV-zwY2NsUFHV0xjJ0MgCI&long_chunk=1',
    title: 'Train Kiss',
    author: 'Marco Beltrami',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c849136/v849136859/1255fe/mkgHLmFFpLc.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p3/b506cbfb08e7f6.mp3?extra=QpCyXu5yttjg31sqZXLLY2B3z31KZ15UrORun6ydl9yof2SeWNrvy2nMTbBaKls7Re0EThf8JKw24EGYy2qNcW9vJn-rnFmcZzjtgjULbO1Ldbubsh90hOcpKWSUeUGHt6695rBfvR4UguISaYg&long_chunk=1',
    title: 'Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 - &quot;Moonlight&quot;: I. Adagio sostenuto',
    author: 'Ludwig van Beethoven',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c851420/v851420270/4e0b1/soAr4vpPuSA.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p17/98ca2a4e463a29.mp3?extra=V0zqSgVRsj5QTQTXFNlJy4sDBJgsysCgP6ZL77P3Hxa3UxCbzUF6xN6GETUJt3vuvXq-vaqfq3-nxl8oi6PTXJ8jqOvEHHhMCCxidWebwg-4VmEv4wijvZ2W60uY9ZAF_IM_8fFsafdfqlWoOKU&long_chunk=1',
    title: 'Hear Me Roar',
    author: 'Ramin Djawadi',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c849228/v849228042/dfd24/0Y5pS2xpJds.jpg'
  },
  {
    mp3: 'https://cs9-5v4.vkuseraudio.net/p2/9d2073e5b169f8.mp3?extra=Rw2Y5IY5iO_2ps6ldV9Z22frY4BrmJx_JzGEri_cMJKk_Em9npta0RXxV6RrfZ7UVb5pd8l8xCTvyH_uT03fzjzSlis-uELwy5o1R-FRbWNIIPwcNC6BW3o5JoXh6mBlidgpKu984sbMT8uV00s&long_chunk=1',
    title: '14. Sc&#232;ne: Moderato',
    author: 'Michael Tilson Thomas, London Symphony Orchestra',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c858228/v858228743/100968/8WM_cBhttYY.jpg'
  },
  {
    mp3: 'https://cs9-12v4.vkuseraudio.net/p5/98d5adbe062e6a.mp3?extra=EOspCIrMo4ZmoJOpS4NvYtE8yxaxGx3_uxW57tNKURfJ5mTVxvJJXXHTZ1KEeYGTfkVb7AmmzpV0zb0Rlizo-sH0KygGJ28y4v7xyXlsZ9hJsi1UiR-3FhcaJje8p0orgbCSu5wT4UGY2u23Ng8&long_chunk=1',
    title: 'Believer',
    author: 'Jennifer Thomas',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c845321/v845321262/f303f/LmK1Ww7v2d8.jpg'
  },
  {
    mp3: 'https://cs9-8v4.vkuseraudio.net/p1/77d6324c63c7f8.mp3?extra=6t2MfvuecNlqHhE51JKuHnz6nNNNpOAyiczzZxNjphZHtpGX7sc7voNfm9LQoYsT6FQxd1W9UOQcj3W6FywZT9LXaM_Zwzk2ozKkb9ABXVl0Gu4csIma3n24oRSnFWFArTqTAvA2VDQOTRB_NfI&long_chunk=1',
    title: 'Morning&#39;s Promise',
    author: 'David Sun',
    cover: 'https://sun9-33.userapi.com/_nqJ45dOmSlKxYJeY-w6JWcphJtQx_d-TYccYw/ieaToKKKRuo.jpg'
  },
  {
    mp3: 'https://cs9-5v4.vkuseraudio.net/p2/54ae830d699b39.mp3?extra=Hbj5Jyqe1WZEKr8TbHXR8PWZEqD0a5ZJkhnlgq6cmgFlXhLlOQnMH06ieV031_RECInAry2xnreNIJhHY6daQdAxSXhyFeh1hIxt3YwnK5-ZmQ9Z8UllMP3MS66XQi74Y10vHuuh06_SM6srt48&long_chunk=1',
    title: 'Coping with Loss',
    author: 'Lounge Caf&#233;',
    cover: 'https://sun9-33.userapi.com/c831508/v831508178/1cc9a9/DKeu7tNhDB0.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p21/14bde16b17ecee.mp3?extra=pX2p3yRxBfUyZDJ2theGhleFGoO4MoNyahMSTEkHi3RXagQNKa9ZqIjxe-fzwH3qBtA70y36Ly5WphgOYfNSe3rTNr8cm6jtThA-ESCrn8jN9kdwL9pfoFe_KAuxSIf4VrOOpuXFcUeddxIs6QQ&long_chunk=1',
    title: 'Happiness Does Not Wait',
    author: '&#211;lafur Arnalds',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c850132/v850132022/cf9d7/NI040AU5Zvo.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p11/515c14086c72cc.mp3?extra=ZRJNFYrpfoQ_OxJNXCbU7VjHv1P0WQmwcSotH3ueIbhV7VtGD67pcms0MD5Eu1_ye8V0vcebdoKMYgIISwZFrP4erXlKpHWtZua1kFokzRh1kUdaAopmSN0C_ePVR6zKB27B_MyVlcY2WgjeEC8&long_chunk=1',
    title: 'Decadence',
    author: 'Paolo Buonvino',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c855136/v855136333/24ba20/cdrwo7XyclU.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p4/d34dd861e06629.mp3?extra=YklLHPuCqAt7GGa39jX-TeH1NxU9GEbPiUL4i_OOxXWj8aIls6VR8ASyHJQHZL49XSZHlI8BiO06OzYagBhdltjE2RjJmTj3kVqc3lYd7pBgH4-W2a6yAONOCFlvJ6mA1eCofW0jIueYGjzCOTc&long_chunk=1',
    title: 'Forbidden Love',
    author: 'Abel Korzeniowski',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c851032/v851032876/653d3/4cvQp1kARg0.jpg'
  },
  {
    mp3: 'https://cs9-4v4.vkuseraudio.net/p1/e848fcd465d89b.mp3?extra=xIBt4O_FDczBZnlENut3bXaPRQwrtXXXPGWZYXXN3tq8lhv3Mfn3IXTlnJ_LRPJBNceapk7WCf-Ln4k2HwV4ph7TARMQdUT_uE_89tIO3T5HvGF9u9qDQADnWz2T2UAscd8KyQ5lBO_MSy9ix3k&long_chunk=1',
    title: 'The Birdwatcher',
    author: 'Dario Marianelli',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c638331/v638331449/3064d/JlZMjPRtDP8.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p6/605505c0bacbb4.mp3?extra=r3e__qHHWvSoBREBLEA_SlR8iINfgrtYd10Cza02wdazLuESUGwDAAX7eDcX-eHBpeKn68C4ZR7sV-wn7C-Dz56QVDc8W6h6judqwZvqTYGcSZ3dkNYEkQGhbl_9VYbGu_HYMBuq9y7bIB36I5g&long_chunk=1',
    title: 'Carol of the Bells',
    author: 'John Williams',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c857424/v857424081/238a77/XsZ6hXvdYVg.jpg'
  },
  {
    mp3: 'https://cs9-14v4.vkuseraudio.net/p5/b97d34c01d3055.mp3?extra=efALB-iQWL2KjfWIOBxs5NlWe6dxR_1vozbk75DZwzN_zW2ZiXq_cxSALppN2rJChn7WbyhRGPU2sd-fcxJR4YJsuJVdlBMxshffB9TfXIGlWxhND6NdVe4QdhTSDNqEfehS-WZGGmVoFjiRwmc&long_chunk=1',
    title: 'Brothers Under The Sun',
    author: 'Bryan Adams',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c855220/v855220538/23dc6e/H-VWr4FIuMU.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p22/181970be4fb247.mp3?extra=JhKafs9dDUuM9YNEnAddlHNgFoPOjvpSYSKKTrb9C7QD5dNDeP--qJ22zJGUOMMGm--QeRuBo9CZwq3PBhzRCsCvW5ZKGWbbnaNNLzbd_RdlJVSCqNSOnctq-5ohsItXrfGrcjaUWbhhLhRLPxc&long_chunk=1',
    title: 'Code Name Vivaldi',
    author: 'The Piano Guys',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c855028/v855028853/218b11/wMRj0xK_8R4.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p8/f5c044adbd289b.mp3?extra=JZ27WYnwaN_PtTsDdmwlDEoNc-currnEtUATPiB9B7FMZiVEvwEPCpBzh2tY1-pVNoGwYA7Nl9jqQopUURvn_YFfxw6a7HFpA_fmSalLXmBtr_VidRw2xLGYScEiMe_dUslNo7IhAtF8cKV-ouA&long_chunk=1',
    title: 'Comptine d&#39;un autre &#233;t&#233;, l&#39;apr&#232;s-midi',
    author: 'Charlie Glass Piano Man',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c604720/v604720447/93055/3icYe1i2Fo4.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p16/cb6df3d7baff35.mp3?extra=AZOA3B5Bfsm3xF_-zpp_UA-Tt3glrawpb79waWb-9JLRuGqW2LfxRuEInjXnodTZk6e7Jj3bzzKfcDaNIuqAt4nBzcuFtbieYl5MHBe-JLcGnT69MN4yRe2ouKnhugNxq9kGd42N3ET8dk08wPE&long_chunk=1',
    title: 'Трасса Е-95',
    author: 'Алиса',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c638117/v638117072/59b4f/NOtV74X7xXI.jpg'
  },
  {
    mp3: 'https://cs9-17v4.vkuseraudio.net/p3/5c237f49e624b7.mp3?extra=xyatxFykIib4qJcxRa2m0q4d8Koi7iPUwHRBDeNxIo0yquWRInJV_pf9_DnX1WytbSJfo3ZWfbb4lKGPl2cp_phUmTxMAwCaEtAdQgEU4rUeK7XyPT1zqXrd4h7PXVVOI6uVxE_BEo3xP2t7vhE&long_chunk=1',
    title: 'Luxx',
    author: 'Broove',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c857036/v857036827/6f74e/_MT1mBeCEW0.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p11/dfec248f5142c4.mp3?extra=mIlyOQDS6brPdrQqG1QCUl3LXe70x1MWZSlXAU2KFBUmkGdIdoasyhW8zThgsbg5JL58UCF64H5Fxy749uyQ-kAp-lT-lrt3OFr40X9tNlbACKzGzcOAdHHzps_w9-WzaBDliq8dlV16tKxEadE&long_chunk=1',
    title: 'Humanity',
    author: 'Scorpions',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c850128/v850128611/86a81/be7RsVMjM7Y.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p10/6102880a33687e.mp3?extra=86AbyE6CHajTsEipCfR01k0Cifag43qfwWAAaD_ZsXgjpwoY0Ci6Tl4DMsPIjSq0L_hrcJKdg5QOd5my_83cwRtbqAz_GPSnHhN9dR6djsPfmjGF4THR5ARlPa4xXkkaKOhn9pdkL5Dd94lLZps&long_chunk=1',
    title: 'May It Be',
    author: 'Enya',
    cover: 'https://sun9-51.userapi.com/yCBj6KTevS5vlKEJWsm5wPZStB5hqf3__i3vHw/YiVao6bmvf4.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p22/0ccfb16fbfc363.mp3?extra=dJf_5wvZTHynYwoXUoC97VN4-YuKySmXiw5sZmet5S8GONHHfLtELMv898lLNRft9T3Nfc2j08YdgkAXx7Nv_BBkyNb3HOTzbsK9-_SGDUOtRarnG1FUMl0oF0p4fduRAnC1rObxKeAiAYVchu0&long_chunk=1',
    title: 'Comatose',
    author: 'Piano Dreamers',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c855720/v855720815/bd976/-304MxMJARk.jpg'
  },
  {
    mp3: 'https://psv4.vkuseraudio.net/c613617/u371745466/audios/cee0ac711aa3.mp3?extra=aW-rS_yhaJU8Q7kHSr-guExCe4jCkt_DET6lTalqGjrOOVTIVDYpFfzD0Jl2N0RRlZhayAWCAuUO6WGNRdqNiojFX23xxJV-fdhgA3L5UI7rZrLljPHIJzMM0C2JB_lRBZlc4hpG-KwLIGPqiHY&long_chunk=1',
    title: 'Faith, Work, Security',
    author: 'Christopher Young',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c837628/v837628453/6d960/tkSXJTD51Uw.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p1/fd5089951778dd.mp3?extra=jbieNHNCXt03boNUxffzAqxXNn5ZZXbPy1lINT9RYmlZXq0U5g1vJHGgQ2c1Qvey2jgfaXZPFEBxPUUG-h3p_kRu6_QJUtYDTv1kp9KHlmzMtV7DJvFbBEDLxm_SW9KSPExkw2PfAC14tJbq0E0&long_chunk=1',
    title: 'Palladio',
    author: 'Escala',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c850324/v850324414/8a475/0fzrDBcbDNE.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p8/e9ca1e70d15a9a.mp3?extra=bDx31Btid2Zi6oMzFXxMVYHYWFnoznkPv3tyDXY3_PVTs_CaI6JnSY58CqbQHnbrcHMzgntFieYckCsGQY-yd8odz3uUQEkx35-3qXUB39iHYAJeBZFuA6gYy4rvCvmwPcS31xRGv533dTYQKkU&long_chunk=1',
    title: 'Goodbye',
    author: 'Jan A.P. Kaczmarek',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c855024/v855024056/3a6a0/gvYY0d4oGgM.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p21/fc093504d9282c.mp3?extra=Qmp_KNsUZhyPP1Y4D6rSXBQUx8OQrtRY3HNXZBgpUcdwlJwgUVtXEwBLjijvDgEmgHs-pomfw7tHCr-xyD-GcjJ9pB-OfBVfZl3Djbd_lyG0AiEFzLI__VxFlBhPrXFFV9sh1H4n8A2fkSQe0G8&long_chunk=1',
    title: 'Angels',
    author: 'Within Temptation',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c856028/v856028931/13d52e/_hUHmqIYBmg.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p11/8449dd074c7268.mp3?extra=qhpbc44dbeN8YoNsUgbIVbnl2rDgmxbgVW1leqhGOZtYAo-eWmkypnlLN5ILngEmQ937_xVXhX_8M8h_TRd0CzIRHtZzpCKMhnHD4nModU9-le01oYGKbyczJnVs7tiKKWLV1A6wRx93LHRac7M&long_chunk=1',
    title: 'Романс',
    author: 'Сплин',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c856128/v856128299/2529dd/7Kc-pKAxLA4.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p7/f1fab8e11c6e34.mp3?extra=HBmJZBt-pypYOA8fKOrYc_6LmGUhhnurTrsS4DFDFvJZBhJmodiCQGj3V5V9_APLBNaHJoj06g_fAO5s_aaoBspBxLc8RPQVEBjUPjoZOlIXQHrvzTJiT8vonBZswHBXdVAB2_ripaMLB8klces&long_chunk=1',
    title: 'Vivaldi: Concerto For Violin And Strings In G Minor, Op.8, No.2, R.315 &quot;L&#39;estate&quot; - 3. Presto (Tempo impetuoso d&#39;estate)',
    author: 'Michel Schwalb&#233;, Eberhard Finke, Horst Gobel, Berliner Philharmoniker, Herbert von Karajan',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c857228/v857228364/1d18fb/h5MdPxvtWRo.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p10/478f558f60c0b5.mp3?extra=wfOAHj66neNHk5mcDitwHSAZ7yR8oLNrXU5poDwaKxzc2L9w3zfzP8co4aqydcF4Tr0HeRoGsOa7330CsHnwvGRrkvT8o8OSLe4s57FD5ik9FBmBXIrTtLUeDUviyYlosgBFc7BauUiWpJ3Itw0&long_chunk=1',
    title: 'Richter: H In New England',
    author: 'Max Richter',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c845416/v845416640/1ee072/BHkiTjVJXeU.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p5/20021ee0cc99f9.mp3?extra=VCocEcwMqne43DXnYDA3bZuk_D_WpEJ-E56AgUjZ3VBwVFr9cTuwPJbm0hg3xu4Ec81Bit3gwVcqkTlPDXuRwDfCuMgHIwLrca748lx3dn96s79PTgdUzqogd0rDy2LwEqsGRm05Gy-tpM3DrQg&long_chunk=1',
    title: 'Exposed',
    author: 'Marco Beltrami',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c849136/v849136859/1255fe/mkgHLmFFpLc.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p10/51ff857ead3c07.mp3?extra=LdVa8ZcXavnBxYZcSqhawvbXJA-Q_rj8U6CLMgZL1MY601UDas9i-YrOdGIPxef_PlMFWUlhBi9J8Xn6Qi0SSP8rZ24kTnBVFVDFjouEl3_FabwdtnD9uC-f_-Kz0EUW8jHmw6GSlHBYoBayqlY&long_chunk=1',
    title: 'Философский камень',
    author: 'БИ-2',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c844720/v844720124/1e37bd/0GDWsH1dfrM.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p18/b0dbba220b61bb.mp3?extra=gU-0hGeRYvdBc_McVJkomvHGJrbWSogToxnY-ULs0CHdvtrLNYNO-xFnDXEJU6XOIo3n9djfk9Q3zcaAwijAUWWYmoEqVWbN7MD76RC-R1WUA34g7LBF4_2NH6O9XVDlzj6E7OWt83Urh3BmLVs&long_chunk=1',
    title: 'Shape Of My Heart',
    author: 'Sting',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c857224/v857224214/43b6f/gPzjPz3FJ0c.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p4/8a1163fd89d84d.mp3?extra=anE-sjNxINvYKvgScq9fREtUDKOAS6RwJuw7YeZqP-vZICqIwMjfMLH5krN9533qt6bChcJ8CX2gOPm7C83Wymw41Dam8cAzO0i9Mcas0tOf6-E4cLPaxJBocXLq2N5ypp_W5Pkw_OTriBInxXQ&long_chunk=1',
    title: 'The Lion Fell in Love With the Lamb (Piano Verison) [Made Famous By Carter Burwell]',
    author: 'Sad Piano Music Collective',
    cover: 'https://sun9-51.userapi.com/9_TKtppuVNJBV0l_jrDeT3DbFQonWntRd3f-Sg/AVQyAj6ujiE.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p12/030b904fcee05f.mp3?extra=Kr4Bz4A_8s6TCxc2TefHetUDobTKx2i787ZK1rFloKzlKkxYJhjW4AWj3r5N0E_9w-LnGSkVfbkLDzQSFWtBFdyn74CVoUePym6AUNS31qpuwq3-_M6gESHujmiXW_CRO7RfQqAlJRaYETf0QDY&long_chunk=1',
    title: 'Eye Of The Tiger',
    author: 'Survivor',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c849328/v849328469/cfe54/ReKJKHe9Oys.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p8/677cc859362c5a.mp3?extra=0hbp92KMbgI1Z2NKxJz98YyBT-VaaF5c6RGMehoR7WZ6IjP5lzGnW9emc3GSeuK_rShbMSA6HhBQQNIc35ZHUZaw5GpDZadrClQXs3bBRRbm00CHl_3Fn3H4UiSRlsRFmjllOBlmG0gJX4qGEx0&long_chunk=1',
    title: 'Charms',
    author: 'Abel Korzeniowski',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c851132/v851132008/1022b5/XAWJorgUcro.jpg'
  },
  {
    mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p14/0e6242100d23e2.mp3?extra=5JW0CU5_An7fJVMh1TQfRNjsP1MksxBx_DOAcDwKpJi08QgklJ3SOxbWJew97hmsC0rWhg5y_dBCvpHt0GtAwQSSVTUbMtV7bliN6OZGPoTdtG0RsenCgvVRKxprWlur8nZeMkGg5BnWipDvWq8&long_chunk=1',
    title: 'Пророк',
    author: 'Кипелов',
    cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c840534/v840534648/4a30f/uKYm4X-w2wA.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p8/0bd3db2e3689f6.mp3?extra=IK1Ky5QTl3MVRff5d3D0vApEsuNVLX7xNVadLSraWkVncrU4iiZz6lKoHkslGaau3oabt-iQ9IT9DO_tfQKy_HM23HxJT9HZJJ3foW9AdifxCutoMvnGBt5gqyhFWQWkVAa7A1vkOvqopYPaTCg&long_chunk=1',
    title: 'Einaudi: Experience',
    author: 'Ludovico Einaudi, Daniel Hope, I Virtuosi Italiani',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c849324/v849324975/d58a9/WLiLdFSkBQ8.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p13/421ac0c2ba4d52.mp3?extra=FtAKr0vzTEc4OnafzrBlAOy0kAVYGUw5CzMMi-nE_Fi8rT5pLy7akNqSp9_OKDurTPaXeN0VAj4BkVm57UHLKX8Drltsg8Qi5B0V-0jH6xlShp01TpUFwGDjwkh7hGi6CeP4tY6LR6Gc_G1tFu0&long_chunk=1',
    title: 'City Of Stars',
    author: 'Ryan Gosling, Emma Stone',
    cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c844720/v844720846/1e60bd/79geis-d13k.jpg'
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p5/4ceae361265b79.mp3?extra=w0qYZsWEAsh6R9a88EXmNChrE6uCKusSohTm46aTpCMk99vFqsvsrb6ENuhLP96ac2I765Ad6aGHESUAE3-ZU4jAA7nCzEwfqbq7V_NfavDTNGwwTqy03DUDuq8hzEix2LOD_U-MQQmnATU2a6A&long_chunk=1',
    title: 'Забіць цмока',
    author: 'Kaciaryna Vadanosava &amp; Fantasy Orchestra',
    cover: ''
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p3/5175fa22862209.mp3?extra=hk4mWaYhyG1jUQDyXrv-UvbKKnuAaeHeaNl_73aQ46WzOd7dF8cTGiZhSsurMAbC-6CsJ2L5gpMmjjS63L1G0DXHpynKSbZtVKel1YxCxdzEQqadcCj-1UU5ZYq1an6nEN2aPsaaT9k0GA2FUaA&long_chunk=1',
    title: 'Разбуры турмы муры',
    author: 'Kosmas &amp; Ціханоўскі',
    cover: ''
  },
  {
    mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p9/cf29f1e2ad121f.mp3?extra=oyJUwblXyTS9Fuyp8v0xxYnqY_o9IADCwI2aHbz-JSfcshZtGdSJjx03debFpRtnPDDjuMsbZs0SlOA7fu4UeYAmvhb2mSV7K54YCVsrBxsg6m8K2LeCCiklrxsfb4hbb2HP9MHcwQ-FIuHUyGw&long_chunk=1',
    title: 'Спокойная ночь',
    author: 'В. Цой, Кино',
    cover: 'https://sun9-24.userapi.com/c856020/v856020325/118a75/0-TM5_4-pIc.jpg'
  }
];

