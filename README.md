# 微信小程序开发总结

## view子元素缩放、移动

通过监听父view的touch事件，单指touch move用于移动，双指touch move则用于缩放， 通过transform:translate 进行移动、transform:scale进行缩放。

## scroll-view子元素缩放

通过监听父scroll-view的touch事件，计算出两指的距离，缩放用的是css zoom来进行的，因为transform:scale的缩放不能改变box的大小，对于scroll-view来说就会产生问题。

但是用zoom有一个问题就是缩放基点是按左上角进行的, 体验不是很好。

![](resources/images/2017-02-03_14_52_47.gif)



