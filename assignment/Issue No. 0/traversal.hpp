/*
 * @author: hanry
 * @time: 2020/7/6
 * 本程序遵循GPL协议。
 * 一共7种遍历方式。
 *
 */

#pragma once
#include <vector>
#include <iostream>
#define _STD ::std::
#define _HANRY_BEGIN namespace hanry {
#define _HANRY_END }
_HANRY_BEGIN

template <class _Ty, class _Container = _STD vector<_Ty>>
class binary_tree {
public:
	struct Node
	{
		binary_tree<_Ty, _Container>::Node* left;
		binary_tree<_Ty, _Container>::Node* right;
		_Ty val;
		Node(const _Ty& val) : left(nullptr), right(nullptr), val(val) {};
		Node(_Ty&& val) : left(nullptr), right(nullptr), val(_STD move(val)) {};
	};

};



_HANRY_END