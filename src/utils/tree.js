/**
 * 获取树形接口的值
 * getTreeDataByKey(单个数据, 'id', 'children', 列表数据)
 */

export function getTreeDataByKey(key, keyName, childrenName, treeData) {
  let result = {};
  function temp(key, keyName, childrenName, treeData) {
    treeData.forEach((item) => {
      if (key === item[keyName]) {
        result = item;
      }
      if (item[childrenName] != null) {
        temp(key, keyName, childrenName, item[childrenName]);
      }
    });
  }
  temp(key, keyName, childrenName, treeData);
  return result;
}
