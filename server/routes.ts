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
      mp3: 'https://cs9-7v4.vkuseraudio.net/p3/cbd15bf6583e47.mp3?extra=i9D39rqRcAxomPGS37daE2M_OAq-XCKda8XAq73zsuO8h_hnhYbbZ2MW8sM9sYwuCr2aHjNyLdFspBaSTrRlxLWanB7a_zuY-n8knErdrE0FfKo4NBgAUyWacSygf_mZ_xQLbm6VcLRnVL4jzXo&long_chunk=1',
      title: 'Формалін',
      author: 'Pulatova',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c849336/v849336473/167e87/8czD-tV0ZXE.jpg'
    },
    {
      mp3: 'https://cs9-12v4.vkuseraudio.net/p5/d8c72c9a23b872.mp3?extra=ZTvskcBdT45YBgKrb13KGUFhJrKuh1tsiZP9HPcujbkhEU98Iz_0BHHHNnZa7mSSn736a0dwQdb9Ylr2eBc3eVBUvcB5ixDVYFatXK_yoZC7elGJEEjaX6KboT3jbJXvGitPLPKPdGlN0PbtGnQ&long_chunk=1',
      title: 'Танго-карантин',
      author: 'Елена Войнаровская',
      cover: 'https://sun9-72.userapi.com/impf/c858220/v858220377/1c0bdb/Q67lFHbF0dI.jpg?size=150x150&quality=96&sign=b3b4304aed41aba05176bf75410c9c73'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p9/eff6ced12c838d.mp3?extra=nQQZa9URsuKzM5-hOt2X0luyz86heW84q6jZ-b3oixbSOQmCoaXzvHWLk6QarpIYmhHYWZAbpcaZarRLGAauRK2ZxnBH4zjDZBNpLAhFsc6-LkxQIEc-ex4OMsNQP30Ge1jiPzSM612LTSCbOc0&long_chunk=1',
      title: 'Верыць',
      author: 'Елена Войнаровская/The Клюквінs',
      cover: ''
    },
    {
      mp3: 'https://cs9-1v4.vkuseraudio.net/p2/505cbf1888b86c.mp3?extra=h7MOhfroABOZVlFUEhw0RZJLmlsy27XhXHqzjsC2NRGfcvHszq0Zuj20JkCB_pLaXuK_fBjlVkpkmQg8zdlzz_BGqmgjOVkybA2tq2vtMaDO-kkkmqqsy1Kxk2kPoycKpq9AwTjbJqJev55QomU&long_chunk=1',
      title: 'Shape of My Heart',
      author: 'Instrumental',
      cover: 'https://sun9-26.userapi.com/c854424/v854424488/6b688/O71ynmdrPeE.jpg'
    },
    {
      mp3: 'https://cs9-5v4.vkuseraudio.net/p1/1e466d884fe504.mp3?extra=Atxl61Wdof6ipBF5CyMvrzG2NYAevaHXxJXq09ZaR6gjmtO6UzPoRM4twmHfMGcBKfhTZAP7_D1GGJAYTdkUEIobVh2LMFQ8hwsiPg9JmMBbCJSEss7tlJZY4yfPQZM_iJbhiB2WkxGmU3uixbA&long_chunk=1',
      title: 'This Land',
      author: 'Ханс Циммер, Lebo M.',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c855436/v855436243/97a90/dIzEuddlLWk.jpg'
    },
    {
      mp3: 'https://cs9-4v4.vkuseraudio.net/p2/a883cea1da0a77.mp3?extra=4l995BdEIB84I6MXxtCZkFRJnxCiWRNP9ZknsuAmKLSN4hUPcGXAdqC3kqiz2FcFlUSODXMYihCojp4hkmBiR6dnBNX6KWHmh5gehLvk6LKDpqZcShVpqmcIkcdRVW73VUJ0nHSc4iT3vhOWmD4&long_chunk=1',
      title: 'Main Theme (From &quot;Schindler&#39;s List&quot;)',
      author: 'The City of Prague Philharmonic Orchestra',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c855424/v855424045/1a24dc/Xkhxrj39H1E.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p20/b6dd87ed497ecd.mp3?extra=xCgpXrm9AbWhz7rIzKsGfOFRSju-TivA2AhkWuktexSf60sAXkqNuCCNCApTUYkRFZQPVx-QJTttkXA3rgydITu2G3dMOBmWAUwe6F2cXK-mhHsnfuXy1IJHXv0RX3QmOfeUTxR13eLUqeF7Cbo&long_chunk=1',
      title: 'River Flows in You',
      author: 'Piano Instrumental',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c638817/v638817446/4caeb/9StiDLx_D04.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p13/d508b4ba940bb5.mp3?extra=H6Som1hZvzJ-eOMonj8ggvQwwz7PbxERXC9GycviIfhRmcFkfZQj3ime-AJUFJALP_aCfQ7TPfYsqT2F7K_ACJiMuZJD4ozQzvT6t8xrMZ-5fahKG5drYaK9CfXGicIfLWJ6QsXc3hsvPPVgw8Y&long_chunk=1',
      title: 'Beethoven&#39;s 5 Secrets',
      author: 'The Piano Guys',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/impf/c855028/v855028853/218b0c/BXMQcDILA6U.jpg?size=150x150&quality=96&sign=59b4874e20a300a7721a5b8d02b8905c'
    },
    {
      mp3: 'https://cs9-3v4.vkuseraudio.net/p3/c856f9a7ad5685.mp3?extra=lFfd6O9YAbYYF0Tms4w7JVZ8aSOVXYbnv24GOUGuJBfY1zWWAiWGXM-OOoqtBlzN3O_xx41gdCHExheQuQ_76sCxZn6lEARl-XBKm3SubExMHK3SRIjdjA3Pc0qeCFP3UBF770LPrZ7D4jub_is&long_chunk=1',
      title: 'May It Be (Lord Of The Rings)',
      author: 'Rachel O&#39;Donnell',
      cover: 'https://sun9-17.userapi.com/xK-oRzkwcXsQuLTpxxVEOk1QFkKrjjdPoWDTSA/VTlyZhVgIgg.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p12/6517a159655a79.mp3?extra=ISb6BNC4RpL0vxiaWREz_v5JPQ91snuNgrkAd4EABwt8PgbEdJJfrS2T9s43NWVInhEwHSbhl34bSf3-APLLZccUt9QNZdMfhtdFFMxy7a3QDpsi9KPL0BZAYbuNr0l5WVBs8FNGucF7H_tDho0&long_chunk=1',
      title: 'The Phantom Of The Opera',
      author: 'Andrew Lloyd Webber, Gerard Butler, Emmy Rossum',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c850024/v850024101/e0017/mkW9-TIAuuE.jpg'
    },
    {
      mp3: 'https://cs9-9v4.vkuseraudio.net/p3/36bb414b97dad3.mp3?extra=KdQeDluVUKJ9fgkO_k5E5WkPvXqX5rgut4DBOPh6_Q0NxM56APwbTrGqsnLEmY1myadWwOvi_ZbAW062rIFUrnDjwkIEYyHaFUbivBdVJ-fqXiAAi0GTyFvySvSxJvT1EQ6fm7wUmnE2UI7yNno&long_chunk=1',
      title: 'Odissea Veneziana',
      author: 'Benjamin Richter',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c857236/v857236142/2040bf/Yzru8wQZvjY.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p2/919982deb0aa75.mp3?extra=vk4fSXnDrMQNdoHNPzQi3QEuN6A9zIFoRY__jEX6z8eZv1STBrgxpBQVK5XKsJ4JKe669lG7KGMYpZaUKlrH-YsdTn7dmKCdN54r3eDyaPeoJyQFPNlNcnxdtyZ3CJQP7A60enaZj7EdBSCrN18&long_chunk=1',
      title: 'Rain, in Your Black Eyes',
      author: 'Ezio Bosso',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c849136/v849136227/da032/rJ25BU5X0ds.jpg'
    },
    {
      mp3: 'https://cs9-6v4.vkuseraudio.net/p3/be10acc6c91c78.mp3?extra=rtOdf13tBAhCj709ZBjVU9vVOM4u5UhBm2wisr_LdLORoXXjtNe-69cVfT2vqQR6g2yCB_lbG9WRfRivYXbUxu0WKqMYyhQEWKtIst5hVer3xo3mktX8VHybZlqweBSqyqBYMB-tJ2dsrRfL3TE&long_chunk=1',
      title: 'Train Kiss',
      author: 'Marco Beltrami',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c849136/v849136859/1255fe/mkgHLmFFpLc.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p3/b90fbe4a8e5cc2.mp3?extra=igpGjf5PjNEj203xIk72bF0YHDIsSNSr-2AHOuwfbSI54psqAMGtscB0q_eF-iodf-KxnYmcoyJvLHJD2KRFnYzDkCOYKdNVvh-5i73HHoxukzciIW_YyBhGiEzHycMFb6UQGnH0FbgQdOkO0MU&long_chunk=1',
      title: 'Piano Sonata No. 14 in C-Sharp Minor, Op. 27 No. 2 - &quot;Moonlight&quot;: I. Adagio sostenuto',
      author: 'Ludwig van Beethoven',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c851420/v851420270/4e0b1/soAr4vpPuSA.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p17/d381cc9572edee.mp3?extra=GtKRCDryvO12fb2ppsyfsNCbsCh3ebghzCMo7tK8U_x2riT85vZFcUTJ18bi3_4Xp8_h0TyHpSzQzxl0dL8a4xZcwc5erTv-A9-LIFE-tYdiZZuCVXd4iBc7-X8z4LhG7ajqwowY8KhOTHXjSfA&long_chunk=1',
      title: 'Hear Me Roar',
      author: 'Ramin Djawadi',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/impf/c849228/v849228042/dfd1f/Bkia1BhY8OI.jpg?size=150x150&quality=96&sign=d0affcbfc2c5dc91f487b88710bd61ee'
    },
    {
      mp3: 'https://cs9-5v4.vkuseraudio.net/p2/7fcfccff925483.mp3?extra=G8OQbsIbWe-30gK23p_blT2NexjkfrZt0eg5wOV6CY_IeZw4-IAjLmS89vWVus_0Oep7qBvX_g2Wob6riFXNdbu2p2DDSrXSxpLoK8M8QqPn-kk7FNggAnQGbFrlrMx6F5YhWDJrHDYOh5gp3c8&long_chunk=1',
      title: '14. Sc&#232;ne: Moderato',
      author: 'Michael Tilson Thomas, London Symphony Orchestra',
      cover: 'https://sun9-38.userapi.com/c858228/v858228743/100968/8WM_cBhttYY.jpg'
    },
    {
      mp3: 'https://cs9-12v4.vkuseraudio.net/p5/163882b0c94ea3.mp3?extra=Nwv8C2k1xmcHaq3g9bH_4fcrgz1F5g3OhPND9W8hfOPsXaR87rIRc_Rrjp7Iodk3QXp_dahAFh1GX8G_Imi9POleWD-NrrPvMQq6jut1QZC_n2hPjpNCyVcpGOr6X24OFbzUdB6EBbxPAgU7ehw&long_chunk=1',
      title: 'Believer',
      author: 'Jennifer Thomas',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c845321/v845321262/f303f/LmK1Ww7v2d8.jpg'
    },
    {
      mp3: 'https://cs9-8v4.vkuseraudio.net/p1/1abfc32fbdeda6.mp3?extra=eOZ2sJm01ws5qkyzeiJqTkFC4OFsxzmv6CSE3W1-EmFTQIj_CaE9NW94jwFMjlRvlBydxW2MnqRlXaTra6MtplJfSB4sQRqq3FtSKJM9KFJeZ62HVRpKgEuOUZifxk8lZtXOS4tZ0s5HvxtAz1w&long_chunk=1',
      title: 'Morning&#39;s Promise',
      author: 'David Sun',
      cover: 'https://sun9-33.userapi.com/_nqJ45dOmSlKxYJeY-w6JWcphJtQx_d-TYccYw/ieaToKKKRuo.jpg'
    },
    {
      mp3: 'https://cs9-5v4.vkuseraudio.net/p2/d3d8028bfd5dcf.mp3?extra=O2v-4xPU3SxazhT3lwGZlnOKHwbdVnk02Us2l4VxMvqGixlImoyU0AIWtvKj-Rb2bmh92wY8zxmim-28aBQB9HUJmlcjpPWAaKBTV6npOdn9nBCi50Lpt0ipMqHhQjNc5fzOuTmNitoJPs8ySZQ&long_chunk=1',
      title: 'Coping with Loss',
      author: 'Lounge Caf&#233;',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c831508/v831508178/1cc9a9/DKeu7tNhDB0.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p21/27e4c3e350c4cd.mp3?extra=Y5coDQyT8ysrp68moDPW4aXq4-7XqcTy0AZhhsm_acgGNkidDMgUBTZjhrPqIgWk18oVvmgisSWOJx-EuwKzUIf85Fo7e3B8qSRCpLdJWzNb6Lbv3VR6yEW6iZLSd4coaHCceAtjNBwUs8RQwhY&long_chunk=1',
      title: 'Happiness Does Not Wait',
      author: '&#211;lafur Arnalds',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c850132/v850132022/cf9d7/NI040AU5Zvo.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p11/fe61bf9754910e.mp3?extra=fM5vXaGsdVWn5-HtViAujKByH4jIWfHjbVu2EbsLbsAmVBF9Zo_1LZ1J3bjfkMipSiXpkGl_ZutpGK1b8DjTRwa4qGgLnYXhHSm_-y4BBhPFyLzqDRfnSnmmrc11mUX-E8yyJhOeTcGNnTdkIIY&long_chunk=1',
      title: 'Decadence',
      author: 'Paolo Buonvino',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c855136/v855136333/24ba20/cdrwo7XyclU.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p4/08bd0fe1b55ec5.mp3?extra=-NVMmL3bTUrL7DzH0DKB8HLtGnaeHYOJm4IyY_cIuC1ok9sCnpcf8KfF2Qzh5V9thyCqFu-JPX4s2ci3RlPIGt31o7JIMC9-hNwttON3qetDucp81_M9jkqf2xRuDjSbbHwAeEb7ykyK4MY_n4s&long_chunk=1',
      title: 'Forbidden Love',
      author: 'Abel Korzeniowski',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/impf/c851032/v851032876/653ce/BTHwzzZ3NaE.jpg?size=150x150&quality=96&sign=4f4100743f47b2fec13f8a16981f1c44'
    },
    {
      mp3: 'https://cs9-4v4.vkuseraudio.net/p1/2ef1bad6cbfcc0.mp3?extra=kPaOrz-cdJEANxihgabQgTHCWfnm9j-MQjZfoH7BglXrrJ_ekeWZsUmnWTqlehHVBbg6EJBXUP1gkLXtSDpjIGAGn13Y2acz_LH5iY76AJbro5lC4u_28x3FkXy_Geowc4LRrSRy0jQ4Xw104tE&long_chunk=1',
      title: 'The Birdwatcher',
      author: 'Dario Marianelli',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c638331/v638331449/3064d/JlZMjPRtDP8.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p6/0a000d8a8397a1.mp3?extra=YyGF5l0MTp9Pp6E57s31_bebu4A71ixLifZSjj3Ahp_L6jW6Ge81CgH1jWxMfURmnoJvyfGozYYETWhVmziO6GE0xOOx3GGYJIEyceo4fy-QWUoIiozRTAeb4GM6jamPY3Abs4R6mf6_L3h14LU&long_chunk=1',
      title: 'Carol of the Bells',
      author: 'John Williams',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c857424/v857424081/238a77/XsZ6hXvdYVg.jpg'
    },
    {
      mp3: 'https://cs9-14v4.vkuseraudio.net/p5/aa1b9016f79c4d.mp3?extra=XDKzxKnrDpzfQW1J08cm4Wkjx1eqiPvfljE-5JjX0QYvqnpINjWK81ROuRrIZ5TGl41oJ4MNHEvJeD0cfsPbP9i6KbNp2KI9DdppmrrgE-lCnfEJJ7Ku5RutmvIboMw8-fcbpYdJfZuFgdzzUYw&long_chunk=1',
      title: 'Brothers Under The Sun',
      author: 'Bryan Adams',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/impf/c855220/v855220538/23dc69/eZgP6UH-3og.jpg?size=150x150&quality=96&sign=2cda4c36d6f31be6c8e994c058560f9f'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p22/c6c07a65fc3674.mp3?extra=N9XXtAf1jczpnsKyxqt1vCf1LhSV8lDtUk_8M8VqTxq9qWe5CR5p3ZwHQ1CCdXpcDOw0Quefv3g_ppdJxLxPiri9KZX65tfsGqKnEk2Hn8O5r4Zy1X3Xg_deedqu-SA8mblifu9lTGu0mGvI9pc&long_chunk=1',
      title: 'Code Name Vivaldi',
      author: 'The Piano Guys',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/impf/c855028/v855028853/218b0c/BXMQcDILA6U.jpg?size=150x150&quality=96&sign=59b4874e20a300a7721a5b8d02b8905c'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p8/c14edafbe3f3ab.mp3?extra=3DDmKnNvXbeLcTz9AG5IBRBybuWI7kaTpAUpEEBiYT-ikW_CpXmCPDRH_YWW9mjjaqtkr4g4EiAJF7i1mMaUHxnUPMy9Eui3XlOh_y-BhUQlykF2QBO0oWLC4uTRDSg4H6tJGGX8qDcPsl7xWqs&long_chunk=1',
      title: 'Comptine d&#39;un autre &#233;t&#233;, l&#39;apr&#232;s-midi',
      author: 'Charlie Glass Piano Man',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c604720/v604720447/93055/3icYe1i2Fo4.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p16/302bb5660f454b.mp3?extra=PntB_F509gsRm_7Jk8lvWRHEqvdeISVtkHIgKmIITuBS8zR9QJtKdbx_SNLVUelaL8iWdjdC-tzZhvjThP8OmlYG89QWYOgnbfngFeAICale9omZbpmjZczPw9_VYUvEukEk2days07FXuP3qDk&long_chunk=1',
      title: 'Трасса Е-95',
      author: 'Алиса',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c638117/v638117072/59b4f/NOtV74X7xXI.jpg'
    },
    {
      mp3: 'https://cs9-17v4.vkuseraudio.net/p3/6133d96bb19355.mp3?extra=6QPzSBFsHJOHLOLMHQOFuylgAmqSgcPKF7LtqQfJ2cp0dHp-PDSxMLPxB8zn_BSyY_NagmYTgXrpyPry28zbz4IMy2Weg4nnfzJLbeKBXD9KgdtPqV9dxNUc-zPmHg7Grkdlg0ok92CCNyMRAZU&long_chunk=1',
      title: 'Luxx',
      author: 'Broove',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c857036/v857036827/6f74e/_MT1mBeCEW0.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p11/54e88d2db13210.mp3?extra=InaMTgNY9rI6-vj6kXTyqC-AOw75tDwpnRxnQSY0tBesYqlKLBiPAwCPA-gkPBs0R-JOCF-dS773zA-h_F9S6ZvTHeJVAF8rCUc_p4eKi7TQXKIRTPMWUj7SHXCvP_fZNvQnydgNULt1f_ZAG7w&long_chunk=1',
      title: 'Humanity',
      author: 'Scorpions',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/impf/c850128/v850128611/86a7c/HjEsbayDJHU.jpg?size=150x150&quality=96&sign=ddcea2a29b29547b93b71a869b649638'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p10/90b27941da9d16.mp3?extra=YKSoP_ZWedKFixHFAXaOaKS4sp2BBvMnPBkkNqghVH3o5VKyad_M14jRKZra54EguvTa3OA9AxdXdhLa8jSTTWIOLX7X5yu3sqXIvzeznyVKs2Q_GoI-5FEedR8xyndPLjl3WMkipmOetUot_eQ&long_chunk=1',
      title: 'May It Be',
      author: 'Enya',
      cover: 'https://sun9-51.userapi.com/yCBj6KTevS5vlKEJWsm5wPZStB5hqf3__i3vHw/YiVao6bmvf4.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p22/e002a82e17c64b.mp3?extra=bzikaTvwMN0urhLRDtCSMOEBJGRaGSBpWEnKg0_Q_tWiCljkH72LXcA7SOviK8x467yOrhOWFzBNuYCRT0RtNJi8ROyyYWLqD5b97MxleFAbttrpc6jPgH3th620fuWcwRKIm5ee-YRIggpkWos&long_chunk=1',
      title: 'Comatose',
      author: 'Piano Dreamers',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c855720/v855720815/bd976/-304MxMJARk.jpg'
    },
    {
      mp3: 'https://psv4.vkuseraudio.net/c613617/u371745466/audios/1ef167aff5f8.mp3?extra=J8oShwgaRJzIDiUETYLEXCaB1R-88zhRSjodlCtu1cOYgTliXvqvE3LbvSYXdl2nKCi03kDHxCWHKywfL6AmLjsXCBmXX06xBeZQAYPuyoeJybFfMmE19SG5kFrmGUu3xPyxnuf3CtrYUTDR-Z0&long_chunk=1',
      title: 'Faith, Work, Security',
      author: 'Christopher Young',
      cover: 'https://sun9-28.userapi.com/c837628/v837628453/6d960/tkSXJTD51Uw.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p1/4b7ae89ff234fe.mp3?extra=Je99LUsl8gneF65JB6OYtXdQYyaE0Rl2v1CA1DI2dO2AYAc124_84fqJ4WIRhFmYuZpnCzYdcaKWBuzpHBCTGNlgic4-XPsDonzTwvqo7Y-iorno_CnRDiR0RZ9vPw1LFUmjkg9GCl-Q8gBKQw0&long_chunk=1',
      title: 'Palladio',
      author: 'Escala',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c850324/v850324414/8a475/0fzrDBcbDNE.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p8/1d785f2e77fd46.mp3?extra=9jP0ZURM8d9KCR6KhhFswiVYWiLYEXnjO2QDqkHjrIAOFHTHzDAiugzVRigHc59sKUpKMm_iqYRfqi9SwDyI0ycH6Vp3LF0N-gIDuhjRuyJrLDAEskhGZaLkTlokcEw2rrt5uZbFASH8-y0bDi8&long_chunk=1',
      title: 'Goodbye',
      author: 'Jan A.P. Kaczmarek',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c855024/v855024056/3a6a0/gvYY0d4oGgM.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p21/1c9d674f050ee3.mp3?extra=qsbV-TUEXGaEKrqNIePw_se79AniWOFJJWA5zWG1IXwtgo5SFCNvMhQlcCIEu00eXMy6A7jK7cK0FKh9WPt9wCO3ffFsZC0bQ1nA1wufNGUKrEx_iuJ_m2hXM7o4b2aRPvtR0v7wG9uhoUxXxQo&long_chunk=1',
      title: 'Angels',
      author: 'Within Temptation',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c856028/v856028931/13d52e/_hUHmqIYBmg.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p11/1be30545796eb0.mp3?extra=frAr1Rw3LWVaqyxOwTwt8i-j7yc2iVfIshrKXFcIQrskw4v_RZNTJWPbghFr0SRzx2VWCgIZEF0uo7s9fKr2p7Le2uDsHKZIwpJGmB7FLcouYDzJ5AX1inVW2w-gm7O4kgDYsYIMXJrERSBaFwM&long_chunk=1',
      title: 'Романс',
      author: 'Сплин',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c856128/v856128299/2529dd/7Kc-pKAxLA4.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p7/3a1330e7f63f1e.mp3?extra=HkeXKFAk67RVnb5rOiV3-S9_RpxDF0RwEFwAxK1WRijcPdnJYMciw_OXiPZ_8xDETAzBcwyBt_ySBnuiQ3MLqveY0kbot3bzC3XxiZ8_INiLnuDk3rFae2SkeLfbEjSjiAa6HagBmr2cdZP0MKM&long_chunk=1',
      title: 'Vivaldi: Concerto For Violin And Strings In G Minor, Op.8, No.2, R.315 &quot;L&#39;estate&quot; - 3. Presto (Tempo impetuoso d&#39;estate)',
      author: 'Michel Schwalb&#233;, Eberhard Finke, Horst Gobel, Berliner Philharmoniker, Herbert von Karajan',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c857228/v857228364/1d18fb/h5MdPxvtWRo.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p10/94d90eae13c65a.mp3?extra=16jgc-FnfqrC8bm2MUzTJ325yeHH023ALoJmL3gB6vQWMXFpW2czTEuSMCLOFWKkkm_MKzPZH3DFvGr9utOGuEDgeK2R7F_zBCV-bqBtWKCT9MTOEsRcGGQ_YXdTBj0WOInpXZGRCuevRBT3Vzg&long_chunk=1',
      title: 'Richter: H In New England',
      author: 'Max Richter',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c845416/v845416640/1ee072/BHkiTjVJXeU.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p5/cbcd4ddc1f8876.mp3?extra=6Pvh6ORgo1PD9snWiAvEvDjgQGbmFPAqEVdfOXBVf6L1CoZiguLcyN6HH4T5YeMnZ5vuDQ9De0osrF4k-zpFqgWNAf1tIFO7gRQNkkHA5d0O9lb7O5EeioQqtqbSwimBSHaUhO2TIRj776e7IHk&long_chunk=1',
      title: 'Exposed',
      author: 'Marco Beltrami',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c849136/v849136859/1255fe/mkgHLmFFpLc.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p10/0ff89eeadd3051.mp3?extra=GcyDCc5oaKB1DqBpIocb_-nPJQ5royfXz_wRSI7nRwszAtlm12jL4YyMgGOmlPAf1xb7kEXhN_y1kt81_3M1nc53QWcHS5zO9r0FfCHQlbyzTpGO_SiG1eusEKDTgUULfhA5ilKpmbc7n6fC5l0&long_chunk=1',
      title: 'Философский камень',
      author: 'БИ-2',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c844720/v844720124/1e37bd/0GDWsH1dfrM.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p18/60524ac376e251.mp3?extra=6jx_Oi8HM1qJda637icqgJQRzU2wC16u4LjQNbZpTLYibHkaG86iptQPz6Edjy2Fi1XpDJ_mfBD1mPVZU0uF6UougLyWDUzFu4DdnbzV-hWfZFvNYvDvDmRTW-_5F3r921zt9OEFJC-KG25k324&long_chunk=1',
      title: 'Shape Of My Heart',
      author: 'Sting',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/impf/c857224/v857224214/43b6a/lbHXUtV6nLs.jpg?size=150x150&quality=96&sign=e07c1bcfb913b8ed4496671497a4b418'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p4/e6d18076f4a3ef.mp3?extra=erL7Cg0LKVuKRF_m05th1-hbLoBLKua83tDAImCBZVMdr51D5YMjND9AGrSyvwcETMh2j6pIgeT6NQvMA2yzcHa2IE3yu0DyUV8pJC36JW_M_ug8Tp-PjlLsbczifxNCChMtlmLPs8TJNxVfkHU&long_chunk=1',
      title: 'The Lion Fell in Love With the Lamb (Piano Verison) [Made Famous By Carter Burwell]',
      author: 'Sad Piano Music Collective',
      cover: 'https://sun9-51.userapi.com/9_TKtppuVNJBV0l_jrDeT3DbFQonWntRd3f-Sg/AVQyAj6ujiE.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p12/3aec09a375af34.mp3?extra=1UnL7x0_4sy4IQSEPXWnrCDxA3X_zWkY01YGH0qzGiWsjY34q3vCyW7PgOx8sWEk-EQ5udbemiQBOosLgkoMkWhFtkO-MOBlu-Y8APpEOdNPRbgSGt2nC34tMZQ5CRJ1YzFVdjiCQxlJn5aAksY&long_chunk=1',
      title: 'Eye Of The Tiger',
      author: 'Survivor',
      cover: 'https://sun1.beltelecom-by-minsk.userapi.com/c849328/v849328469/cfe54/ReKJKHe9Oys.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p8/ec3f93146cc2c3.mp3?extra=cjYLKovbWQYq6JgNAg7fkpxPnyCxD7exUKCiJBSg_EQY8EbSCP8fp6uqtnK3c6MwlMvHq2dnBEUahV5T2OFouPM0Ym2moIrF1kP7RF2CmFkXyLWpBrMMW-7jFSu0jR8rurzm0JUcl0l_8iMifsc&long_chunk=1',
      title: 'Charms',
      author: 'Abel Korzeniowski',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c851132/v851132008/1022b5/XAWJorgUcro.jpg'
    },
    {
      mp3: 'https://sgi1.beltelecom-by-minsk.vkuseraudio.net/p14/90eca33837d76c.mp3?extra=Vps86MwnJ6lan2411zL9DHvCadqbBU3CmfOlSjx-jpznG6-vJQjhFQmpHde7xNetv8NLgsxyh8olAFFxTWzCIJf3R4xNgZqWvs-IR-WXxJkNEgrMs29idTiopq19zYQahEV44AvezXhE2k1xa2U&long_chunk=1',
      title: 'Пророк',
      author: 'Кипелов',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/impf/c840534/v840534648/4a30c/HES8EHEWZjQ.jpg?size=150x150&quality=96&sign=64df11c037605d6c3a6bc7f53f0eca34'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p8/4d7b93e5f1bfa3.mp3?extra=HLQIK4KgP2bOrh7L6OSyVvFRohEdDStEXxHFTr9GNPTO6cTuj4JCfhNQWExhIO-zcFdKKvzagHE545hzOdbsVzBSeluyPIIIddENZ-cWFbrlTGSleqoB_MKy8FXnL4vZ5eV9fhn3XlzemiGyTg4&long_chunk=1',
      title: 'Einaudi: Experience',
      author: 'Ludovico Einaudi, Daniel Hope, I Virtuosi Italiani',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c849324/v849324975/d58a9/WLiLdFSkBQ8.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p13/13a7e5fb64d0ee.mp3?extra=SVq_0K9iv4mvcKrLrZt8RnJXB9yZ2AK-yaRoT6O_OrPZ_GkOUbe5eYcPfCp-uwZdm7jBpBtHW3ktmNyYp4caX7CeShWb6rOhvz4fFoWm5ngMsIqd4c26jokL_wBAIkR2PG7omq3PbSinHfkoCW8&long_chunk=1',
      title: 'City Of Stars',
      author: 'Ryan Gosling, Emma Stone',
      cover: 'https://sun2.beltelecom-by-minsk.userapi.com/c844720/v844720846/1e60bd/79geis-d13k.jpg'
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p5/7da255dfd10305.mp3?extra=kVygiWBPlYhCxslkoca5ju5HJroTSzQTfVVN0LGsXcmhybg8qWp4vX30waed06HgUxy_JMhi3Ja17FBhzTwDT46LBYvBbcbQsQSsv2tBuNFSMfbV-XpIhqictAh1-RML4JIq1vRnP2sNA-6Mz4M&long_chunk=1',
      title: 'Забіць цмока',
      author: 'Kaciaryna Vadanosava &amp; Fantasy Orchestra',
      cover: ''
    },
    {
      mp3: 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p3/2b3af88975e2d8.mp3?extra=JhPhpiLCI2cNaPTDJuM-dsMsdf1o_1-gfBQ-efByRAGrGr8IMEOhadvh3qZQY37FMYOMmBt2btOsXmfsUdU0Q64Wx9m9OM1wlzG3ixd9QbTrQMO_-Ja5ynnaIAIJvwojqkOHvqNKXl837ZZeopE&long_chunk=1',
      title: 'Разбуры турмы муры',
      author: 'Kosmas &amp; Ціханоўскі',
      cover: ''
    }
  ]
;

