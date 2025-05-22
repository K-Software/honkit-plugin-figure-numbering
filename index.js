module.exports = {
  hooks: {
    "page:before": function (page) {
      let count = 1;

      if (typeof page.content === 'string') {
        page.content = page.content.replace(/!\[(.*?)\]\((.*?)\)/g, function (match, alt, src) {
          let caption = '<b>Fig ' + count + '</b>';
          count++;
          // Check if the alt text is empty
          if (alt !== '') {
            caption = caption + ': ' + alt;
          }
          return `<figure style="text-align: center;">
  <img src="${src}" alt="${alt}">
  <figcaption>${caption}</figcaption>
</figure>`;
        });
      }

      return page;
    }
  }
};


