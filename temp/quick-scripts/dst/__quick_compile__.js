
(function () {
var scripts = [{"deps":{"./assets/scripts/Def/UIDef":33,"./assets/scripts/Def/StorageDef":36,"./assets/scripts/Def/MessageDef":37,"./assets/scripts/Game":26,"./assets/scripts/Game/BrainGameScene":31,"./assets/scripts/Game/Constellation/ConstellationScript":9,"./assets/scripts/Manager/MessageDispatcher/MessageDispatcher":35,"./assets/scripts/Manager/DriveManager/DriveManager":7,"./assets/scripts/Manager/SoundManager":15,"./assets/scripts/Manager/UserManager/UserManager":34,"./assets/scripts/StaticDatas/SoundTableData":14,"./assets/scripts/StaticDatas/DescribeTableData":6,"./assets/scripts/Tools/HTTPUtil":18,"./assets/scripts/Tools/MathUtil":19,"./assets/scripts/Tools/ResUtil":20,"./assets/scripts/Tools/StorageUtil":24,"./assets/scripts/Tools/TableReader":3,"./assets/scripts/Tools/TransformUtil":23,"./assets/scripts/Tools/TimeUtil":22,"./assets/scripts/Tools/UILoader":21,"./assets/scripts/Tools/UIUtil":25,"./assets/scripts/Tools/CookieUtil":27,"./assets/scripts/Tools/DataStructure/List":11,"./assets/scripts/Dictionary":5,"./assets/scripts/Example/LoadCSV/LoadCSVExp":8,"./assets/scripts/UI/GameUI/RadarChart":32,"./assets/scripts/UI/GameUI/RadarChartBz":4,"./assets/scripts/UI/GameUI/GameUI":10,"./assets/scripts/UI/GameUI/CountDown":29,"./assets/scripts/UI/DescribeUI/DescribeUI":17,"./assets/scripts/UI/DisConnectUI/DisConnectUI":12,"./assets/scripts/UI/LoadingUI/LoadingRotation":30,"./assets/scripts/UI/LoadingUI/LoadingUI":2,"./assets/scripts/UI/ShowResultUI/ShowResultUI":1,"./assets/scripts/UI/ProcessingUI/ProcessingUI":13,"./assets/scripts/UI/StartUI/StartUI":16,"./assets/scripts/UI/GameUI/Dashboard":28},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Def/UIDef":33,"../../Manager/DriveManager/DriveManager":7,"../../Manager/SoundManager":15,"../../Manager/UserManager/UserManager":34,"../../Tools/UIUtil":25},"path":"preview-scripts/assets/scripts/UI/ShowResultUI/ShowResultUI.js"},{"deps":{"../../Def/UIDef":33,"../../Tools/ResUtil":20,"../../Tools/UIUtil":25,"../../Tools/TableReader":3},"path":"preview-scripts/assets/scripts/UI/LoadingUI/LoadingUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TableReader.js"},{"deps":{"../../Def/MessageDef":37,"../../Manager/MessageDispatcher/MessageDispatcher":35,"../../Tools/MathUtil":19},"path":"preview-scripts/assets/scripts/UI/GameUI/RadarChartBz.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Dictionary.js"},{"deps":{"../Tools/TableReader":3},"path":"preview-scripts/assets/scripts/StaticDatas/DescribeTableData.js"},{"deps":{"../../Def/MessageDef":37,"../MessageDispatcher/MessageDispatcher":35,"../../Tools/HTTPUtil":18},"path":"preview-scripts/assets/scripts/Manager/DriveManager/DriveManager.js"},{"deps":{"../../StaticDatas/SoundTableData":14,"../../Tools/TableReader":3},"path":"preview-scripts/assets/scripts/Example/LoadCSV/LoadCSVExp.js"},{"deps":{"../../Def/MessageDef":37,"../../Manager/MessageDispatcher/MessageDispatcher":35,"../../Manager/SoundManager":15,"../../Manager/UserManager/UserManager":34},"path":"preview-scripts/assets/scripts/Game/Constellation/ConstellationScript.js"},{"deps":{"../../Def/MessageDef":37,"../../Def/UIDef":33,"../../Manager/DriveManager/DriveManager":7,"../../Manager/MessageDispatcher/MessageDispatcher":35,"../../Manager/SoundManager":15,"../../Manager/UserManager/UserManager":34,"../../Tools/TimeUtil":22,"./CountDown":29,"../../Tools/UIUtil":25,"./Dashboard":28,"./RadarChartBz":4},"path":"preview-scripts/assets/scripts/UI/GameUI/GameUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/DataStructure/List.js"},{"deps":{"../../Def/UIDef":33,"../../Manager/DriveManager/DriveManager":7,"../../Tools/UIUtil":25,"../GameUI/GameUI":10},"path":"preview-scripts/assets/scripts/UI/DisConnectUI/DisConnectUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/ProcessingUI/ProcessingUI.js"},{"deps":{"../Tools/TableReader":3},"path":"preview-scripts/assets/scripts/StaticDatas/SoundTableData.js"},{"deps":{"../StaticDatas/SoundTableData":14},"path":"preview-scripts/assets/scripts/Manager/SoundManager.js"},{"deps":{"../../Def/UIDef":33,"../../Manager/SoundManager":15,"../../Manager/UserManager/UserManager":34,"../../Tools/UIUtil":25},"path":"preview-scripts/assets/scripts/UI/StartUI/StartUI.js"},{"deps":{"../../Def/UIDef":33,"../../Manager/SoundManager":15,"../../Tools/UIUtil":25,"../../StaticDatas/DescribeTableData":6},"path":"preview-scripts/assets/scripts/UI/DescribeUI/DescribeUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/HTTPUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/MathUtil.js"},{"deps":{"./DataStructure/List":11},"path":"preview-scripts/assets/scripts/Tools/ResUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/UILoader.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TimeUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TransformUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/StorageUtil.js"},{"deps":{"./DataStructure/List":11,"./ResUtil":20,"./UILoader":21},"path":"preview-scripts/assets/scripts/Tools/UIUtil.js"},{"deps":{"./Tools/UIUtil":25,"./Def/UIDef":33},"path":"preview-scripts/assets/scripts/Game.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/CookieUtil.js"},{"deps":{"../../Def/MessageDef":37,"../../Manager/DriveManager/DriveManager":7,"../../Manager/MessageDispatcher/MessageDispatcher":35,"../../Tools/MathUtil":19},"path":"preview-scripts/assets/scripts/UI/GameUI/Dashboard.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GameUI/CountDown.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/LoadingUI/LoadingRotation.js"},{"deps":{"../Def/MessageDef":37,"../Manager/MessageDispatcher/MessageDispatcher":35,"../Manager/SoundManager":15,"../Tools/ResUtil":20,"./Constellation/ConstellationScript":9},"path":"preview-scripts/assets/scripts/Game/BrainGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GameUI/RadarChart.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/UIDef.js"},{"deps":{"../../Tools/StorageUtil":24},"path":"preview-scripts/assets/scripts/Manager/UserManager/UserManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Manager/MessageDispatcher/MessageDispatcher.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/StorageDef.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/MessageDef.js"}];
var entries = ["preview-scripts/__qc_index__.js"];

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

if (typeof global === 'undefined') {
    window.global = window;
}

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            requestScript = scripts[ m.deps[request] ];
        }
        
        path = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                path = name2path[request];
            }

            if (!path) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            path = formatPath(requestScript.path);
        }

        m = modules[path];
        
        if (!m) {
            console.warn('Can not find module for path : ' + path);
            return null;
        }

        if (!m.module && m.func) {
            m.func();
        }

        if (!m.module) {
            console.warn('Can not find module.module for path : ' + path);
            return null;
        }

        return m.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;
        
            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
        
            return path;
        });

        loadScripts(srcs, function () {
            self.run();
            cb();
        });
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    