export function useInitTable(){
  const searchForm = reactive({
    keyword: ''
  })
  const resetSearchForm = () => {
    searchForm.keyword = ''
    getData()
  }
   
  const tableData = ref([])
  const loading = ref(false)
  
  // 分页
  const currentPage = ref(1)
  const total = ref(0)
  const limit = ref(10)
  
  // 获取数据
  function getData(p = null) {
    if (typeof p == "number") {
      currentPage.value = p
    }
    loading.value = true
    getManagerList(currentPage.value, searchForm)
      .then((res) => {
        tableData.value = res.list.map((o) => {
          o.statusLoading = false
          return o
        })
        total.value = res.totalCount
        roles.value = res.roles
      })
      .finally(() => {
        loading.value = false
      })
  }
  
  getData()

  return{
    searchForm,
    resetSearchForm,
    tableData,
    loading,
    currentPage,
    total,
    limit,
    getData
  }
} 