// ��������ѭGPLЭ�顣
// ������Ϊ��򵥵�heap��ֻʵ�� ** ���ȶ��� ** ��һ�� heap ��
// ���д������namespace hanry����

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