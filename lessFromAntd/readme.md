## 从antd里面学习less

### 安排
1. 看antd源码里面常用的less规则，如果不懂的话就进行百度 
2. 后续会追加ts的学习


### less基础知识
[less官方文档](https://less.bootcss.com/)
1. 变量
    @name: 规则   
    然后在需要这个规则的时候引入@name即可。如width: @width;
2. 混合
```
.bordered {
        xx
    }
.use {
    .bordered();
}
```
    
3. 嵌套
    可以少写一层父级标签 直接在里面框里面写即可，注意规则的冒泡和嵌套优先级和规则嵌套标签重合
4. 运算
    运算的结果一般是放在变量里面，然后再进行引入变量。计算的结果以最左边的单位类型为准    
    calc()并不对数学表达式求值
5. 转义
    @min768 ~"(规则)"，类似起别名的作用
6. 函数
    一些常用的函数percentage(),saturate()饱和度,spin()等分法
7. 命名空间和访问符
    混合的高级，便于重用和分发
    ```
    #bundle() {
        .button {
            xx
        }
    }
    使用: 
    #header a {
        #bundle.button();
    }
    ```
8. 映射
   ``` #bundle() {
        primary: blue;
    }
    .button {
        color: #colors[primary]
    }```
9. 作用域
    类似js，当前找不到变量会沿着父级作用域去找，冒泡
10. 注释
    可以进行注释，行级、块级
11. 导入
    @import "library" 如果是less文件的导入可以省略后缀。