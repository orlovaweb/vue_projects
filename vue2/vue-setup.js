
new Vue({
  el: '#app',
  data: {
    articles: [
      { id: 1, srcImg: "img/article1.jpg", title: "Let’s Get Solution For Building Construction Work", data: "26 December,2022", tag: "Kitchan Design" },
      { id: 2, srcImg: "img/article2.jpg", title: "Low Cost Latest Invented Interior Designing Ideas", data: "22 December,2022", tag: "Living Design" },
      { id: 3, srcImg: "img/article3.jpg", title: "Best For Any Office & Business Interior Solution", data: "25 December,2022", tag: "Interior Design" },
      { id: 4, srcImg: "img/article4.jpg", title: "Let’s Get Solution For Building Construction Work", data: "26 December,2022", tag: "Kitchan Design" },
      { id: 5, srcImg: "img/article5.jpg", title: "Low Cost Latest Invented Interior Designing Ideas", data: "22 December,2022", tag: "Living Design" },
      { id: 6, srcImg: "img/article6.jpg", title: "Best For Any Office & Business Interior Solution", data: "25 December,2022", tag: "Interior Design" },

    ],

  },
  computed: {
    firstPageArticles() {
      return this.articles.slice(0, 3);
    }
  },

});
