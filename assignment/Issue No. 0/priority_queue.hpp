// 本程序遵循GPL协议。
// 本程序为最简单的heap，只实现 ** 优先队列 ** 这一种 heap 。
// 所有代码均在namespace hanry里面

/*
 * @author: hanry
 * @time: 2020/7/6
 */

#pragma once
#include <iostream>
#include <vector>
#include <algorithm>
#include <exception>
#define _STD ::std::
#define _HANRY_BEGIN namespace hanry {
#define _HANRY_END }

_HANRY_BEGIN
template <class _Ty, class _Container = _STD vector<_Ty>, class _Pr = _STD less<typename _Container::value_type>>
class priority_queue {
protected:
    _Container c{};
    _Pr comp{};

public:


};




_HANRY_END