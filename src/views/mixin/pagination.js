// 分页功能
export const pagination = {
  data() {
    return {
      page: 1,
      size: 10,
      total: 0
    }
  },
  methods: {
    handleSizeChange(size) {
      this.size = size
    },
    handleCurrentChange(page) {
      this.page = page
    }
  }
}
