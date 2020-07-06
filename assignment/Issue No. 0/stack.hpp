// ��������ѭGPLЭ�顣
// ������Ϊ��򵥵�stack��ֻʵ�� push pop top��
// ������stackû�����ݵ�ʱ��ʹ�� pop �� top���
// ����ᶪ���쳣��
// ���д������namespace hanry����

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
	_STD cout << "stack ���Կ�ʼ!\n";
	_STD cout << a.pop() << _STD endl;
	_STD cout << a.pop() << _STD endl;
	_STD cout << a.pop() << _STD endl;
	a.push(114514);
	_STD cout << a.top() << _STD endl;
	_STD cout << "stack ������ϣ���������" << _STD endl;
	_STD cout << _STD endl;
}

_HANRY_END