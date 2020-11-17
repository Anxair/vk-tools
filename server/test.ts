const url = 'https://cs9-12v4.vkuseraudio.net/p5/d7aa7d4d5b5/b2f3cffe21ad34/index.m3u8?extra=GIPX9pw2G8K7yJpaBzdvruXjG5R_nsh2Kao1IZ0Vdj45HOl_HNtZlpoImYr1GPp2PpLBVEJUanrSIilNBA8PI6rwYyQrnRTFyWIESkBx83VfS1qWy3tP9qI9qoYTf8bMRdYD8H1wnOo2tROadnYA&long_chunk=1';
const urlBad = 'https://sgi2.beltelecom-by-minsk.vkuseraudio.net/p9/d7713baacaa/6745972362615f/index.m3u8?extra=ZjYfB74whaODmKgEJFHs1LasI6oTAxTNUjS7j5ACyJTTnwFfOn7BeKdGIf2z6twVJsUCpkcbM4PA5ir2dudqRCzccVTfNgQVlQQBNBuJCclvFpnCbfGjjI_5178wmOeiI9TF4h9DYkw-Ddz2ZBZl&long_chunk=1';
const array = [url, urlBad];

array.forEach(url => {
  const splitted = url.split('/');
  if (splitted[2].includes('cs')) {
    splitted.splice(4, 1);

    splitted[5] = splitted[5].replace(
      splitted[5].slice(0, splitted[5].indexOf('.m3u8')),
      splitted[4]
    );
    splitted[5] = splitted[5].replace('.m3u8', '.mp3');

    splitted.splice(4, 1);
    splitted.join('/');
    console.log(splitted.join('/'));
  }
  if (splitted[2].includes('sg')) {
    splitted.splice(4, 1);

    splitted[5] = splitted[5].replace(
      splitted[5].slice(0, splitted[5].indexOf('.m3u8')),
      splitted[4]
    );
    splitted[5] = splitted[5].replace('.m3u8', '.mp3');

    splitted.splice(4, 1);
    splitted.join('/');
    console.log(splitted.join('/'));
  }
});


