# 二叉树的遍历

先放图。

#### [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)

![preorderTraversal](https://raw.githubusercontent.com/jiang-hr/unique-web-summer/daily_report/Issue%20No.%200/Data_structure/preorderTraversal.png)



#### [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)

![inorderTraversal](https://raw.githubusercontent.com/jiang-hr/unique-web-summer/daily_report/Issue%20No.%200/Data_structure/inorderTraversal.png)



#### [145. 二叉树的后序遍历](https://leetcode-cn.com/problems/binary-tree-postorder-traversal/)

![postorderTraversal](https://raw.githubusercontent.com/jiang-hr/unique-web-summer/daily_report/Issue%20No.%200/Data_structure/postorderTraversal.png)



> 当然，用递归做确实又快又简单，上面把代码放置到 leetcode 的成绩说明了一切。



------

代码如下：



```cpp
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
}
// 所有代码均为 binary_tree 当中的类。
```



#### 先序遍历（递归）

```cpp
private:
	void __preorder_traversal_by_recursion_t(TreeNode* root, _Container& ans) {
        if (root != nullptr) {
            ans.push_back(root->val);
            __preorder_traversal_by_recursion_t(root->left, ans);
            __preorder_traversal_by_recursion_t(root->right, ans);
        }
    }

public:
	_Container inorderTraversalbyRecursion(){
        _Container ans;
        __inorder_traversal_by_recursion_t(this->root, ans);
        return ans;
    }
```



#### 中序遍历（递归）

```cpp
private:
    void __inorder_traversal_by_recursion_t(TreeNode* root, _Container& ans){
        if (root != nullptr){
            __inorder_traversal_by_recursion_t(root->left, ans);
            ans.push_back(root->val);
            __inorder_traversal_by_recursion_t(root->right, ans);
        }
    }

public:
    _Container inorderTraversalbyRecursion(){
        _Container ans;
        __inorder_traversal_by_recursion_t(this->root, ans);
        return ans;
    }
```



#### 后序遍历（递归）

```cpp
private:
    void __postorder_traversal_by_recursion_t(TreeNode* root, _Container& ans) {
        if (root != nullptr) {
            __postorder_traversal_by_recursion_t(root->left, ans);
            __postorder_traversal_by_recursion_t(root->right, ans);
            ans.push_back(root->val);
        }
    }

public:
	_Container postorderTraversalbyRecursion() {
        _Container ans;
        __postorder_traversal_by_recursion_t(this->root, ans);
        return ans;
    }
```





#### 先序遍历（栈）

```cpp
public:
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
```





#### 中序遍历（栈）

```cpp
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
```



#### 后序遍历（栈）

```cpp
public:
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
```





#### 层级遍历（队列）

```cpp
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
```








