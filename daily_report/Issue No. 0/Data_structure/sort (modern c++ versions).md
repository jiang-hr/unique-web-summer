## 排序算法（c++版本）

#### 冒泡排序

```cpp
// 1. 冒泡排序 C++ 实现。
template <class _RanIt, class _Pr = _STD less<void>>
void bubbleSort(const _RanIt _First, const _RanIt _Last, _Pr cmp = _STD less<>()) {
	for (auto iter1 = _First; iter1 != _Last; ++iter1)
		for (auto iter2 = _First; iter2 != iter1; ++iter2)
			if (cmp(*iter1, *iter2))
				_STD swap(*iter1, *iter2);
}
```



|          | 平均时间 | 最好时间 | 最坏时间 |
| :------: | -------- | -------- | -------- |
| 冒泡排序 | O(n^2)   | O(n)     | O(n^2)   |



#### 插入排序

```cpp
// 2. 插入排序 C++ 实现。
template <class _RanIt, class _Pr = _STD less<void>>
void insertSort(const _RanIt _First, const _RanIt _Last, _Pr cmp = _STD less<>()) {
	for (_RanIt iter1 = _First; iter1 != _Last; ++iter1) {
		auto temp = *iter1;
		for (_RanIt iter = iter1; iter != _First;) {
			_RanIt iter2 = iter;
			if (!cmp(temp, *--iter)) {
				*iter2 = temp;
				break;
			}
			else *iter2 = *iter;
		}
		if (cmp(temp, *_First))
			*_First = temp;
	}
}
```




|          | 平均时间 | 最好时间 | 最坏时间 |
| :------: | -------- | -------- | -------- |
| 插入排序 | O(n^2)   | O(n)     | O(n^2)   |



#### 归并排序

```cpp
template <class _Ty, class _Container = _STD vector<_Ty>, class _Pr = _STD less<typename _Container::value_type>>
void merge(_Container& _Array, int _Left, int _Mid, int _Right, _Container& temp, _Pr cmp = _STD less<typename _Container::value_type>{}) {
	int i = _Left, j = _Mid + 1, t = 0;
	while (i <= _Mid && j <= _Right) {
		if (cmp(_Array[i], _Array[j])) temp[t++] = _Array[i++];
		else temp[t++] = _Array[j++];
	}
	while (i <= _Mid) temp[t++] = _Array[i++];
	while (j <= _Right) temp[t++] = _Array[j++];
	t = 0;
	while (_Left <= _Right) _Array[_Left++] = temp[t++];
}

template <class _Ty, class _Container = _STD vector<_Ty>>
void _merge_sort_t(_Container& _Array, int left, int right, _Container& temp) {
	if (left < right) {
		int mid = (left + right) / 2;
		_merge_sort_t<_Ty>(_Array, left, mid, temp);
		_merge_sort_t<_Ty>(_Array, mid + 1, right, temp);
		merge<_Ty>(_Array, left, mid, right, temp);
	}
}

template <class _Container>
void mergeSort(_Container& _Array) {
	_Container temp = _Array;
	_merge_sort_t<typename _Container::value_type>(_Array, 0, _Array.size() - 1, temp);
}
```



|          | 平均时间 | 最好时间 | 最坏时间 |
| :------: | -------- | -------- | -------- |
| 归并排序 | O(nlogn) | O(nlogn) | O(nlogn) |



#### 快速排序

```cpp
// 3. 快速排序 C++ 实现

template <class _Container>
void quickSort(_Container& arr, int low, int high) {
	if (high <= low) return;
	int i = low, j = high + 1;
	typename _Container::value_type key = arr[low];
	for (;;) {
		while (arr[++i] < key)if (i == high)break;
		while (arr[--j] > key)if (j == low)break;
		if (i >= j) break;
		_STD swap(arr[i], arr[j]);
	}
	_STD swap(arr[low], arr[j]);
	quickSort(arr, low, j - 1);
	quickSort(arr, j + 1, high);
}
```




|          | 平均时间 | 最好时间 | 最坏时间 |
| :------: | -------- | -------- | -------- |
| 快速排序 | O(nlogn) | O(nlogn) | O(n^2)   |



#### 堆排序

```cpp
template <class _Container, class _Pr = _STD less<typename _Container::value_type>>
void __heap_sort_t(_Container& _Array, int i, int _Length, _Pr cmp = _Pr{})
{
	int child, tmp;
	for (; 2 * i + 1 < _Length; i = child) {
		child = 2 * i + 1;
		if ((child + 1 < _Length) && cmp(_Array[child], _Array[child + 1])) child++;
		if (cmp(_Array[i], _Array[child]))_STD swap(_Array[i], _Array[child]);
		else break;
	}
}

template <class _Container>
void heapSort(_Container& _Array)
{
	int i, tmp;
	if (_Array.size() > 1) {
		for (i = _Array.size() / 2 - 1; i >= 0; i--)  __heap_sort_t(_Array, i, _Array.size());
		for (i = 0; i < _Array.size(); i++) {
			tmp = _Array[0];
			_Array[0] = _Array[_Array.size() - i - 1];
			_Array[_Array.size() - i - 1] = tmp;
			__heap_sort_t(_Array, 0, _Array.size() - 1 - i);
		}
	}
}
```




|        | 平均时间 | 最好时间 | 最坏时间 |
| :----: | -------- | -------- | -------- |
| 堆排序 | O(nlogn) | O(nlogn) | O(nlogn) |


