<template>
  <div>
    <div id="demoList">

      <form>
        <div class="input-field">
          <i class="material-icons">search</i>
          <input v-model='searchText' placeholder='Search for ...'>
          <br> <br> {{resultCount}}
        </div>
      </form>

      <div class="containerTable">
        <table class="table">
          <thead>
            <tr class="header">
              <th>
                <div><a @click="sortvia('provider_name')">Provider</a></div>
              </th>
              <th>
                <div><a @click="sortvia('city')">City</a></div>
              </th>
              <th>
                <div><a @click="sortvia('rating')">Rating</a></div>
              </th>
              <th>
                <div><a @click="sortvia('discussed')">Care Issues</a></div>
              </th>
              <th>
                <div><a @click="sortvia('communicated')">Communicated</a></div>
              </th>
              <th>
                <div><a @click="sortvia('professional')">Professional</a></div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items | filterBy searchText | orderBy sortparam order | paginate">
              <td>{{item.provider_name}}</td>
              <td>{{item.city}}</td>
              <td>{{item.rating}} %</td>
              <td>{{item.discussed}} %</td>
              <td>{{item.communicated}} %</td>
              <td>{{item.professional}} %</td>

            </tr>
          </tbody>
        </table>
      </div>
      <ul>
        <li v-for="pageNumber in totalPages" :key="pageNumber">
          <a href="#" @click="setPage(pageNumber)">{{ pageNumber+1 }}</a>
        </li>
      </ul>


    </div>

  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        items: [{
            "id": 1,
            "created_at": "-0001-11-30 00:00:00",
            "updated_at": "-0001-11-30 00:00:00",
            "state": "state",
            "ccn": "ccn",
            "provider_name": "provider_name",
            "address": "address",
            "city": "city",
            "zip": "zip",
            "phone": "phone",
            "ownership": "ownership",
            "offers_nursing": "offers_nursing",
            "offers_pt": "offers_pt",
            "offers_ot": "offers_ot",
            "offers_st": "offers_st",
            "offers_msw": "offers_msw",
            "offers_hha": "offers_hha",
            "date_certified": "0000-00-00",
            "professional": 0,
            "communicated": 0,
            "discussed": 0,
            "rating": 0,
            "recommend": 0,
            "completed": 0,
            "response_rate": 0,
            "total_sent": 0,
            "data_through_date": "data_through_date",
            "footnote": "Footnote "
          },
          {
            "id": 2,
            "created_at": "-0001-11-30 00:00:00",
            "updated_at": "-0001-11-30 00:00:00",
            "state": "AL",
            "ccn": "17000",
            "provider_name": "BUREAU OF HOME & COMMUNITY SERVICES               ",
            "address": "201 MONROE STREET, THE RSA TOWER,  SUITE 1200                                                       ",
            "city": "MONTGOMERY          ",
            "zip": "36104",
            "phone": "3342065341",
            "ownership": "Official Health Agency",
            "offers_nursing": "TRUE",
            "offers_pt": "TRUE",
            "offers_ot": "TRUE",
            "offers_st": "TRUE",
            "offers_msw": "TRUE",
            "offers_hha": "TRUE",
            "date_certified": "0000-00-00",
            "professional": 0,
            "communicated": 0,
            "discussed": 0,
            "rating": 0,
            "recommend": 0,
            "completed": 0,
            "response_rate": 0,
            "total_sent": 0,
            "data_through_date": "15-Oct",
            "footnote": "b"
          }, {
            "id": 3,
            "created_at": "-0001-11-30 00:00:00",
            "updated_at": "-0001-11-30 00:00:00",
            "state": "AL",
            "ccn": "17008",
            "provider_name": "JEFFERSON COUNTY HOME CARE                        ",
            "address": "2201 ARLINGTON AVENUE                                                                               ",
            "city": "BESSEMER            ",
            "zip": "35020",
            "phone": "2059169500",
            "ownership": "Official Health Agency",
            "offers_nursing": "TRUE",
            "offers_pt": "TRUE",
            "offers_ot": "TRUE",
            "offers_st": "TRUE",
            "offers_msw": "TRUE",
            "offers_hha": "TRUE",
            "date_certified": "0000-00-00",
            "professional": 90,
            "communicated": 85,
            "discussed": 81,
            "rating": 92,
            "recommend": 79,
            "completed": 67,
            "response_rate": 23,
            "total_sent": 291,
            "data_through_date": "15-Oct",
            "footnote": "a"
          }, {
            "id": 4,
            "created_at": "-0001-11-30 00:00:00",
            "updated_at": "-0001-11-30 00:00:00",
            "state": "AL",
            "ccn": "017009",
            "provider_name": "ALACARE HOME HEALTH & HOSPICE                     ",
            "address": "2970 LORNA ROAD                                                                                     ",
            "city": "BIRMINGHAM          ",
            "zip": "35216",
            "phone": "2058242680",
            "ownership": "Local",
            "offers_nursing": "TRUE",
            "offers_pt": "TRUE",
            "offers_ot": "TRUE",
            "offers_st": "TRUE",
            "offers_msw": "TRUE",
            "offers_hha": "TRUE",
            "date_certified": "0000-00-00",
            "professional": 92,
            "communicated": 90,
            "discussed": 89,
            "rating": 88,
            "recommend": 87,
            "completed": 340,
            "response_rate": 36,
            "total_sent": 944,
            "data_through_date": "15-Oct",
            "footnote": ""
          }, {
            "id": 5,
            "created_at": "-0001-11-30 00:00:00",
            "updated_at": "-0001-11-30 00:00:00",
            "state": "AL",
            "ccn": "17013",
            "provider_name": "GENTIVA HEALTH SERVICES                           ",
            "address": "1239 RUCKER BLVD                                                                                    ",
            "city": "ENTERPRISE          ",
            "zip": "36330",
            "phone": "3343470234",
            "ownership": "Official Health Agency",
            "offers_nursing": "TRUE",
            "offers_pt": "TRUE",
            "offers_ot": "TRUE",
            "offers_st": "FALSE",
            "offers_msw": "FALSE",
            "offers_hha": "TRUE",
            "date_certified": "0000-00-00",
            "professional": 91,
            "communicated": 92,
            "discussed": 93,
            "rating": 89,
            "recommend": 87,
            "completed": 222,
            "response_rate": 38,
            "total_sent": 584,
            "data_through_date": "15-Oct",
            "footnote": ""
          },

          {
            "id": 6,
            "created_at": "-0001-11-30 00:00:00",
            "updated_at": "-0001-11-30 00:00:00",
            "state": "AL",
            "ccn": "17014",
            "provider_name": "AMEDISYS HOME HEALTH OF BLOUNTSVILLE         ",
            "address": "1106 2ND AVENUE E, SUITE E                                                                          ",
            "city": "ONEONTA             ",
            "zip": "35121",
            "phone": "2052744919",
            "ownership": "Local",
            "offers_nursing": "TRUE",
            "offers_pt": "TRUE",
            "offers_ot": "TRUE",
            "offers_st": "TRUE",
            "offers_msw": "TRUE",
            "offers_hha": "FALSE",
            "date_certified": "0000-00-00",
            "professional": 87,
            "communicated": 84,
            "discussed": 90,
            "rating": 82,
            "recommend": 79,
            "completed": 203,
            "response_rate": 39,
            "total_sent": 521,
            "data_through_date": "15-Oct",
            "footnote": ""
          }
        ],

        loading: false,
        order: 1,
        searchText: null,
        ccn: null,
        currentPage: 0,
        itemsPerPage: 2,
        resultCount: 0
      }
    },
    computed: {
      totalPages: function() {
        return Math.ceil(this.resultCount / this.itemsPerPage);
      }
    },
    methods: {
      refresh: function() {
        this.$children[0].refresh();
      },
      sortvia: function(sortparam, order) {
        this.order = this.order * -1;
        this.sortparam = sortparam;
      },
      setPage: function(pageNumber) {
        this.currentPage = pageNumber;
        console.log(pageNumber);
      }
    },
    filters: {
      paginate: function(list) {
        this.resultCount = this.items.length;
        console.log(this.resultCount + " Result count");
        console.log(this.currentPage + " current page");
        console.log(this.itemsPerPage + " items per page");
        console.log(this.totalPages + " Total pages 2");
        if (this.currentPage >= this.totalPages) {
          this.currentPage = Math.max(0, this.totalPages - 1);
        }
        var index = this.currentPage * this.itemsPerPage;
        return this.items.slice(index, index + this.itemsPerPage);
      }
    },
  }
</script>

<style>

</style>

