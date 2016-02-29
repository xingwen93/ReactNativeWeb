/**
 * IOS 入口文件
 */
'use strict';

var React = require('react-native');
var StoryList = require('./views/StoryList.react');
var StoryDetail = require('./views/StoryDetail.react');
var { AppRegistry } = React;

var ReactNativeWeb = React.createClass({
    render: function(){
        return <StoryDetail />;
    }
});

AppRegistry.registerComponent('ReactNativeWeb', () => ReactNativeWeb);