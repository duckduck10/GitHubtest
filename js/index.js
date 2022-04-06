const records = [1, 2, 3, 4]

async function saveRecord(record) {
  return new Promise((resolved, rejected) => {
    setTimeout(()=> {
      resolved(`record ${record} saved`)
    }, Math.random() * 500)
  })
}

async function forEachSaveRecords(records) {
  records.forEach(async (record) => {
    const res = await saveRecord(record);
    console.log(res)
  })
}

async function forEachSaveRecordsUsePromiseAll(records) {
  const promiseArr = []
  records.forEach(async (record) => {
  	promiseArr.push(saveRecord(record))
	
  })
  const res = await Promise.all(promiseArr)	
  console.table(res)
}

async function forofSaveRecords(records) {
  for (const record of records) {
    const res = await saveRecord(record);
    console.log(res)
  }
}

(async () => {
  console.log("=== for of save records ===")
  await forofSaveRecords(records)

  console.log("=== forEach save records use Promise All ===")
  await forEachSaveRecordsUsePromiseAll(records)
  
  console.log("=== forEach save records ===")
  await forEachSaveRecords(records)

})()