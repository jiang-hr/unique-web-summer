
/*
 * @author: hanry
 * @time: 2020/7/6
 * 本程序遵循GPL协议。
 * 本程序纪录5种排序算法。
 * 分别是
 *    冒泡排序
 *    插⼊排序
 *    归并排序
 *    快速排序
 *    堆排序
 *
 */

#pragma once
#include <functional>
#include <vector>
#define _STD ::std::


 // 1. 冒泡排序 C++ 实现。
template <class _RanIt, class _Pr = _STD less<void>>
void bubbleSort(const _RanIt _First, const _RanIt _Last, _Pr cmp = _STD less<>()) {
	for (auto iter1 = _First; iter1 != _Last; ++iter1)
		for (auto iter2 = _First; iter2 != iter1; ++iter2)
			if (cmp(*iter1, *iter2))
				_STD swap(*iter1, *iter2);
}

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



// 3. 归并排序 C++ 实现

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


// 3. 快速排序 C++ 实现

template <class _Container>
void quickSort(_Container& _Array, int _Left, int _Right) {
	if (_Right <= _Left) return;
	int i = _Left, j = _Right + 1;
	typename _Container::value_type key = _Array[_Left];
	for (;;) {
		while (_Array[++i] < key)if (i == _Right)break;
		while (_Array[--j] > key)if (j == _Left)break;
		if (i >= j) break;
		_STD swap(_Array[i], _Array[j]);
	}
	_STD swap(_Array[_Left], _Array[j]);
	quickSort(_Array, _Left, j - 1);
	quickSort(_Array, j + 1, _Right);
}



// 4. 堆排序 C++ 实现

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




#include <cstdlib>
#include <stack>
void sort_test() {
	_STD cout << "排序算法测试开始" << _STD endl;
	_STD vector<int> a{ 7,6,5,4,3,2,1,0 };
	for (int i = 0; i < 300; i++) {
		a.push_back(rand());
	}
	_STD cout << "原始数据为" << _STD endl;
	for (auto x : a) {
		_STD cout << x << ' ';
	}
	_STD vector<int> b(a);
	_STD cout << "\n冒泡排序准确度测试" << _STD endl;
	bubbleSort(b.begin(), b.end());
	for (auto x : b) {
		_STD cout << x << ' ';
	}
	b = a;
	_STD cout << "\n插入排序准确度测试" << _STD endl;
	insertSort(b.begin(), b.end());
	for (auto x : b) {
		_STD cout << x << ' ';
	}
	_STD cout << "\n并归排序准确度测试" << _STD endl;
	b = a;
	mergeSort(b);
	for (auto x : b) {
		_STD cout << x << ' ';
	}
	b = a;
	_STD cout << "\n快速排序准确度测试" << _STD endl;
	quickSort(b, 0, b.size() - 1);
	for (auto x : b) {
		_STD cout << x << ' ';
	}
	b = a;
	_STD cout << "\n堆排序准确度测试" << _STD endl;
	heapSort(b);
	for (auto x : b) {
		_STD cout << x << ' ';
	}
	_STD cout << "\n排序算法测试结束" << _STD endl;
}
