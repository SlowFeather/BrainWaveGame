
(function () {
var scripts = [{"deps":{"./assets/scripts/Def/StorageDef":37,"./assets/scripts/Def/UIDef":5,"./assets/scripts/Def/MessageDef":17,"./assets/scripts/Dictionary":10,"./assets/scripts/Game/BrainGameScene":36,"./assets/scripts/Game/Constellation/ConstellationScript":13,"./assets/scripts/StaticDatas/DescribeTableData":23,"./assets/scripts/StaticDatas/SoundTableData":12,"./assets/scripts/Manager/DriveManager/DriveManager":7,"./assets/scripts/Manager/MessageDispatcher/MessageDispatcher":11,"./assets/scripts/Manager/SoundManager":21,"./assets/scripts/Manager/UserManager/UserManager":14,"./assets/scripts/Tools/LoggerUtil":38,"./assets/scripts/Tools/ResUtil":22,"./assets/scripts/Tools/CookieUtil":27,"./assets/scripts/Tools/TimeUtil":26,"./assets/scripts/Tools/TableReader":3,"./assets/scripts/Tools/StorageUtil":25,"./assets/scripts/Tools/MathUtil":19,"./assets/scripts/Tools/TransformUtil":29,"./assets/scripts/Tools/UILoader":28,"./assets/scripts/Tools/UIUtil":30,"./assets/scripts/Tools/DataStructure/List":15,"./assets/scripts/Tools/HTTPUtil":24,"./assets/scripts/Example/LoadCSV/LoadCSVExp":6,"./assets/scripts/Game":33,"./assets/scripts/UI/GameUI/RadarChart":2,"./assets/scripts/UI/GameUI/CountDown":34,"./assets/scripts/UI/GameUI/Dashboard":32,"./assets/scripts/UI/GameUI/RadarChartBz":8,"./assets/scripts/UI/GameUI/GameUI":31,"./assets/scripts/UI/DescribeUI/DescribeUI":18,"./assets/scripts/UI/LoadingUI/LoadingUI":4,"./assets/scripts/UI/LoadingUI/LoadingRotation":35,"./assets/scripts/UI/ProcessingUI/ProcessingUI":20,"./assets/scripts/UI/ShowResultUI/ShowResultUI":1,"./assets/scripts/UI/StartUI/StartUI":16,"./assets/scripts/UI/DisConnectUI/DisConnectUI":9},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Manager/DriveManager/DriveManager":7,"../../Def/UIDef":5,"../../Tools/UIUtil":30,"../../Manager/SoundManager":21,"../../Manager/UserManager/UserManager":14},"path":"preview-scripts/assets/scripts/UI/ShowResultUI/ShowResultUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GameUI/RadarChart.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TableReader.js"},{"deps":{"../../Def/UIDef":5,"../../Tools/ResUtil":22,"../../Tools/UIUtil":30,"../../Tools/TableReader":3},"path":"preview-scripts/assets/scripts/UI/LoadingUI/LoadingUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/UIDef.js"},{"deps":{"../../StaticDatas/SoundTableData":12,"../../Tools/TableReader":3},"path":"preview-scripts/assets/scripts/Example/LoadCSV/LoadCSVExp.js"},{"deps":{"../../Def/MessageDef":17,"../MessageDispatcher/MessageDispatcher":11,"../../Tools/HTTPUtil":24},"path":"preview-scripts/assets/scripts/Manager/DriveManager/DriveManager.js"},{"deps":{"../../Def/MessageDef":17,"../../Manager/MessageDispatcher/MessageDispatcher":11,"../../Tools/MathUtil":19},"path":"preview-scripts/assets/scripts/UI/GameUI/RadarChartBz.js"},{"deps":{"../../Manager/DriveManager/DriveManager":7,"../../Def/UIDef":5,"../../Tools/UIUtil":30,"../GameUI/GameUI":31},"path":"preview-scripts/assets/scripts/UI/DisConnectUI/DisConnectUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Dictionary.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Manager/MessageDispatcher/MessageDispatcher.js"},{"deps":{"../Tools/TableReader":3},"path":"preview-scripts/assets/scripts/StaticDatas/SoundTableData.js"},{"deps":{"../../Def/MessageDef":17,"../../Manager/MessageDispatcher/MessageDispatcher":11,"../../Manager/SoundManager":21,"../../Manager/UserManager/UserManager":14},"path":"preview-scripts/assets/scripts/Game/Constellation/ConstellationScript.js"},{"deps":{"../../Tools/StorageUtil":25},"path":"preview-scripts/assets/scripts/Manager/UserManager/UserManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/DataStructure/List.js"},{"deps":{"../../Def/UIDef":5,"../../Manager/SoundManager":21,"../../Manager/UserManager/UserManager":14,"../../Tools/UIUtil":30},"path":"preview-scripts/assets/scripts/UI/StartUI/StartUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/MessageDef.js"},{"deps":{"../../Def/UIDef":5,"../../Manager/SoundManager":21,"../../StaticDatas/DescribeTableData":23,"../../Tools/UIUtil":30},"path":"preview-scripts/assets/scripts/UI/DescribeUI/DescribeUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/MathUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/ProcessingUI/ProcessingUI.js"},{"deps":{"../StaticDatas/SoundTableData":12},"path":"preview-scripts/assets/scripts/Manager/SoundManager.js"},{"deps":{"./DataStructure/List":15},"path":"preview-scripts/assets/scripts/Tools/ResUtil.js"},{"deps":{"../Tools/TableReader":3},"path":"preview-scripts/assets/scripts/StaticDatas/DescribeTableData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/HTTPUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/StorageUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TimeUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/CookieUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/UILoader.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TransformUtil.js"},{"deps":{"./DataStructure/List":15,"./ResUtil":22,"./UILoader":28},"path":"preview-scripts/assets/scripts/Tools/UIUtil.js"},{"deps":{"../../Def/UIDef":5,"../../Def/MessageDef":17,"../../Manager/MessageDispatcher/MessageDispatcher":11,"../../Manager/DriveManager/DriveManager":7,"../../Manager/SoundManager":21,"../../Manager/UserManager/UserManager":14,"../../Tools/TimeUtil":26,"../../Tools/UIUtil":30,"./CountDown":34,"./Dashboard":32,"./RadarChartBz":8},"path":"preview-scripts/assets/scripts/UI/GameUI/GameUI.js"},{"deps":{"../../Def/MessageDef":17,"../../Manager/DriveManager/DriveManager":7,"../../Manager/MessageDispatcher/MessageDispatcher":11,"../../Tools/MathUtil":19},"path":"preview-scripts/assets/scripts/UI/GameUI/Dashboard.js"},{"deps":{"./Tools/LoggerUtil":38,"./Tools/UIUtil":30,"./Def/UIDef":5},"path":"preview-scripts/assets/scripts/Game.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GameUI/CountDown.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/LoadingUI/LoadingRotation.js"},{"deps":{"../Def/MessageDef":17,"../Manager/MessageDispatcher/MessageDispatcher":11,"../Manager/SoundManager":21,"./Constellation/ConstellationScript":13,"../Tools/ResUtil":22},"path":"preview-scripts/assets/scripts/Game/BrainGameScene.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/StorageDef.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/LoggerUtil.js"}];
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
    