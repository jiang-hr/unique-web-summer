/*
 * @author: hanry
 * @time: 2020/07/07
 * 本程序遵循GPL协议。
 * 一共7种遍历方式。
 *
 */

#pragma once
#include <vector>
#include <iostream>
#include <stack>
#include <queue>
#define _STD ::std::
#define _HANRY_BEGIN namespace hanry {
#define _HANRY_END }
_HANRY_BEGIN

template <class _Ty, class _Container = _STD vector<_Ty>>
class binary_tree {
public:
	struct TreeNode
	{
		binary_tree<_Ty, _Container>::TreeNode* left;
		binary_tree<_Ty, _Container>::TreeNode* right;
		_Ty val;
		TreeNode(const _Ty& val) : left(nullptr), right(nullptr), val(val) {};
		TreeNode(_Ty&& val) : left(nullptr), right(nullptr), val(_STD move(val)) {};
	};

public:
	binary_tree<_Ty, _Container>::TreeNode* root;

public:
	binary_tree() = default;

	~binary_tree() = default;

private:
	void __inorder_traversal_by_recursion_t(TreeNode* root, _Container& ans) {
		if (root != nullptr) {
			__inorder_traversal_by_recursion_t(root->left, ans);
			ans.push_back(root->val);
			__inorder_traversal_by_recursion_t(root->right, ans);
		}
	}

	void __preorder_traversal_by_recursion_t(TreeNode* root, _Container& ans) {
		if (root != nullptr) {
			ans.push_back(root->val);
			__preorder_traversal_by_recursion_t(root->left, ans);
			__preorder_traversal_by_recursion_t(root->right, ans);
		}
	}

	void __postorder_traversal_by_recursion_t(TreeNode* root, _Container& ans) {
		if (root != nullptr) {
			__postorder_traversal_by_recursion_t(root->left, ans);
			__postorder_traversal_by_recursion_t(root->right, ans);
			ans.push_back(root->val);
		}
	}

public:
	_Container inorderTraversalbyRecursion() {
		_Container ans;
		__inorder_traversal_by_recursion_t(this->root, ans);
		return ans;
	}

	_Container preorderTraversalbyRecursion() {
		_Container ans;
		__preorder_traversal_by_recursion_t(this->root, ans);
		return ans;
	}

	_Container postorderTraversalbyRecursion() {
		_Container ans;
		__postorder_traversal_by_recursion_t(this->root, ans);
		return ans;
	}

public:
	_Container inorderTraversalbyStack() {
		_Container ans{};
		_STD stack<binary_tree<_Ty, _Container>::TreeNode*> stack{};
		binary_tree<_Ty, _Container>::TreeNode* cur = this->root;
		while (cur != nullptr || !stack.empty()) {
			if (cur != nullptr) {
				stack.push(cur);
				cur = cur->left;
			}
			else {
				cur = stack.top();
				stack.pop();
				ans.push_back(cur->val);
				cur = cur->right;
			}
		}
		return ans;
	}

	_Container postorderTraversalbyStack() {
		_Container ans;
		_STD stack<binary_tree<_Ty, _Container>::TreeNode*> stack{};
		binary_tree<_Ty, _Container>::TreeNode* cur = this->root;
		while (cur || !stack.empty()) {
			while (cur) {
				stack.push(cur);
				ans.push_back(cur->val);
				cur = cur->right;
			}
			cur = stack.top();
			stack.pop();
			cur = cur->left;
		}
		_STD reverse(ans.begin(), ans.end());
		return ans;
	}

	_Container preorderTraversalbyStack() {
		_Container ans{};
		_STD stack<binary_tree<_Ty, _Container>::TreeNode*> stack{};
		binary_tree<_Ty, _Container>::TreeNode* cur = this->root;
		while (cur != nullptr || !stack.empty()) {
			if (cur != nullptr) {
				ans.push_back(cur->val);
				stack.push(cur);
				cur = cur->left;
			}
			else {
				cur = stack.top();
				stack.pop();
				cur = cur->right;
			}
		}
		return ans;
	}

public:
	_Container breadthFirstSearch() {
		_Container ans{};
		_STD queue<binary_tree<_Ty, _Container>::TreeNode*> queue{};
		queue.push(this->root);
		while (!queue.empty()) {
			auto temp = queue.front();
			if (temp != nullptr) {
				ans.push_back(temp->val);
				queue.pop();
				queue.push(temp->left);
				queue.push(temp->right);
			}
			else {
				queue.pop();
			}
		}
		return ans;
	}
};


_STD ostream& operator<<(_STD ostream& s, const _STD vector<int>& v) {
	s.put('[');
	char comma[3] = { '\0', ' ', '\0' };
	for (typename _STD vector<int>::const_iterator x = v.begin(); x != v.end(); ++x) {
		s << comma << *x;
		comma[0] = ',';
	}
	return s << ']';
}



void traversal_test() {
	binary_tree<int, _STD vector<int>> a{};
	a.root = new binary_tree<int, _STD vector<int>>::TreeNode(2);
	a.root->left = new binary_tree<int, _STD vector<int>>::TreeNode(1);
	a.root->right = new binary_tree<int, _STD vector<int>>::TreeNode(3);
	_STD cout << a.inorderTraversalbyRecursion() << _STD endl;
	_STD cout << a.preorderTraversalbyRecursion() << _STD endl;
	_STD cout << a.postorderTraversalbyRecursion() << _STD endl;
	_STD cout << a.inorderTraversalbyStack() << _STD endl;
	_STD cout << a.preorderTraversalbyStack() << _STD endl;
	_STD cout << a.postorderTraversalbyStack() << _STD endl;
	_STD cout << a.breadthFirstSearch() << _STD endl;
}

_HANRY_END