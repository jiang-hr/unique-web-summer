// 本程序遵循GPL协议。
// 本程序为最简单的stack，只实现 push pop top。
// 请勿在stack没有内容的时候使用 pop 和 top命令。
// 否则会丢出异常。
// 所有代码均在namespace hanry里面

/*
 * @author: hanry
 * @time: 2020/7/6
 */

#pragma once
#include <iostream>
#include <exception>
#define _STD ::std::
#define _HANRY_BEGIN namespace hanry {
#define _HANRY_END }

_HANRY_BEGIN

template<class _Ty>
class Stack {
private:

	class Entry {
	public:
		Stack<_Ty>::Entry* next;
		_Ty data;
		Entry(Entry* next, _Ty data) :next(next), data(data) {};
	};

	typename Stack<_Ty>::Entry* __stack_top;

public:
	Stack() :__stack_top(nullptr) {};

	void push(_Ty data) {
		__stack_top = new Entry(__stack_top, data);
	};

	[[nodiscard]] _Ty top() {
		try {
			if (this->__stack_top == nullptr) {
				throw _STD out_of_range("Invalid range! There is nothing in stack");
			}
		}
		catch (_STD out_of_range e) {
			_STD cout << e.what() << _STD endl;
			return _Ty{};
		}

		return this->__stack_top->data;
	};

	_Ty pop() {
		try {
			if (this->__stack_top == nullptr) {
				throw _STD out_of_range("Invalid range! There is nothing in stack");
			}
		}
		catch (_STD out_of_range e) {
			_STD cout << e.what() << _STD endl;
			return _Ty{};
		}
		_Ty result = __stack_top->data;
		auto temp = __stack_top;
		__stack_top = __stack_top->next;
		delete temp;
		return result;
	};
};

void stack_test() {
	Stack<int> a;
	a.push(100);
	a.push(101);
	_STD cout << "stack 测试开始!\n";
	_STD cout << a.pop() << _STD endl;
	_STD cout << a.pop() << _STD endl;
	_STD cout << a.pop() << _STD endl;
	a.push(114514);
	_STD cout << a.top() << _STD endl;
	_STD cout << "stack 测试完毕，正常工作" << _STD endl;
	_STD cout << _STD endl;
}

_HANRY_END