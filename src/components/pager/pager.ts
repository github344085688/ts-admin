
import axVue from '../../httpAnency'
import { Component, Prop, Provide, Watch } from "vue-property-decorator";
import template from "./pager.vue";
import { uniq, sortBy, forEach } from 'lodash-es';
import selectFilters from '../../components/selectFilters/selectFilters.ts'

@Component({
    mixins: [template],
    name: 'pager',
    components: {
        'select-filters':selectFilters
    },
    filters: {
      filtersPage(value: any) {
        if (value) return value;
        else  return '...';
      }
    }
})
export default class Pager extends axVue {

    @Prop({ default: 10 })
    customizePageSize: number;

    @Prop({ default: 0 })
    totalCount: number;

    @Prop({ default: 5 })
    pagerShowCount: number;

    get showingFrom() {
        return (this.pager.activedPage - 1) * this.pageSize + 1;
    }

    get showingTo() {
        return this.pager.activedPage * this.pageSize > this.totalCount ? this.totalCount : this.pager.activedPage * this.pageSize;
    }

    pager = { activedPage: 1, totalPage: 0, pagerShowCount: 0, halfPagerShowCount: 0, low: 0, high: 0 };
    pageSize = 0;
    inputPage = 1;
    lastPageSize = 0;
    lastTotalCount = 0;
    totalPage = 0;
    halfPagerShowCount = this.pagerShowCount / 2;
    stay = false;
    pages: any[] = [];
    pageSizeOptions: any[] = [1, 10, 20, 50, 100, 300, 500, 1000];

    mounted() {
        this.pageSize = this.customizePageSize;
        this.initialPager();
        this.loadDefaultPager();
    }

    @Watch("totalCount")
    updateWhenTotalCountChange() {
        if (this.totalCount === 0 || this.lastTotalCount == this.totalCount) return;
        this.reInitialPager();
    }

    @Watch("pageSize")
    reRenderWhenCustomizePageSizeChange() {
        this.reRenderWhenPageSizeChange(this.pageSize);
    }

    reRenderWhenPageSizeChange(selectPageSize: number) {
        if (selectPageSize) {
            this.pageSize = selectPageSize;
        }
        if (this.pageSize === 0 || this.lastPageSize == this.pageSize) return;
        this.reInitialPager();
        this.inputPage = this.pager.activedPage;
        this.$emit("update:reloadContent", { currentPage: this.pager.activedPage, pageSize: this.pageSize, totalCount: this.totalCount});
    }

    private loadPage(page: number) {
        if(! page) return ;
        this.changeActivePage(page);
    }

    loadFirstPage() {
        this.changeActivePage(1);
    }

    loadPrevPage() {
        this.changeActivePage(this.pager.activedPage - 1 > 0 ? this.pager.activedPage - 1 : 1);
    }

    loadNextPage() {
        this.changeActivePage(this.pager.activedPage + 1 > this.pager.totalPage ? this.pager.totalPage : this.pager.activedPage + 1);
    }

    loadLastPage() {
        this.changeActivePage(this.pager.totalPage);
    }

    goToPage() {
        let number = this.inputPage > this.pager.totalPage ? this.pager.totalPage : this.inputPage;
        this.changeActivePage(Number(number));
    }

    private changeActivePage(page: number) {
        if (this.pager.activedPage == page)
            return;
        this.pager.activedPage = page;
        this.inputPage = page;
        this.pages = this.loadPager(this.pager.activedPage);
        this.$emit("update:reloadContent", ({ 'currentPage': page, 'pageSize': this.pageSize, 'totalCount': this.totalCount }));

    }

    private initialPager() {
        this.pager.pagerShowCount = this.pagerShowCount;
        this.pager.halfPagerShowCount = Math.floor(this.pager.pagerShowCount / 2);
        this.pager.totalPage = Math.ceil(this.totalCount / this.pageSize);
        this.lastTotalCount = this.totalCount;
        this.lastPageSize = this.pageSize;
    }

    loadDefaultPager() {
        this.pager.activedPage = 1;
        this.pages = this.loadPager(this.pager.activedPage);
    }

    reInitialPager() {
        this.initialPager();
        if (this.stay) {
            if (this.pager.activedPage > this.pager.totalPage) {
                this.pager.activedPage = 1;
            }
            let reActivePage = this.pager.activedPage;
            this.pager.activedPage = -1;
            this.changeActivePage(reActivePage);
        } else {
            this.pager.activedPage = 1;
            this.pages = this.loadPager(this.pager.activedPage);
        }
    }

    loadPager(activedPage: number) {
        let pages = [];
        if (this.pager.totalPage < 5) {
            for (let i = 1; i <= this.pager.totalPage; i++) {
                pages.push({"number": i, "active": false});
            }
            this.funActivedPage(pages, activedPage);
        }
        if (this.pager.totalPage > 4) {
            if (activedPage < this.pager.totalPage - 3) {
                pages = [
                    {"number": activedPage, "active": false},
                    {"number": activedPage + 1, "active": false},
                    {"number": null, "active": false, "isHidden": true},
                    {"number": this.pager.totalPage - 1, "active": false},
                    {"number": this.pager.totalPage, "active": false}
                ];
                this.funActivedPage(pages, activedPage);
            } else {
                pages = [
                    {"number": this.pager.totalPage - 3, "active": false},
                    {"number": this.pager.totalPage - 2, "active": false},
                    {"number": this.pager.totalPage - 1, "active": false},
                    {"number": this.pager.totalPage, "active": false}
                ];
                this.funActivedPage(pages, activedPage);
            }
        }
        return pages;
    }
  private funActivedPage(pages: any , activedPage: any) {
    forEach(pages, function (item) {
      if (item.number == activedPage) {
        item["active"] = true;
      }
    });
  }
}
