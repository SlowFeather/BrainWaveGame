
(function () {
var scripts = [{"deps":{"./assets/scripts/Def/UIDef":1,"./assets/scripts/Tools/TableReader":4,"./assets/scripts/Manager/UserManager/UserManager":10,"./assets/scripts/Manager/MessageDispatcher/MessageDispatcher":11,"./assets/scripts/Tools/DataStructure/List":13,"./assets/scripts/Def/StorageDef":19,"./assets/scripts/Tools/HTTPUtil":20,"./assets/scripts/Dictionary":23,"./assets/scripts/Tools/UILoader":24,"./assets/scripts/Tools/TimeUtil":25,"./assets/scripts/Tools/StorageUtil":26,"./assets/scripts/Tools/MathUtil":27,"./assets/scripts/Tools/TransformUtil":29,"./assets/scripts/Tools/CookieUtil":30,"./assets/scripts/UI/GameUI/CountDown":32,"./assets/scripts/UI/LoadingUI/LoadingRotation":33,"./assets/scripts/UI/GameUI/RadarChart":34,"./assets/scripts/Def/MessageDef":36,"./assets/scripts/Game/BrainGameScene":2,"./assets/scripts/Game":6,"./assets/scripts/UI/LoadingUI/LoadingUI":3,"./assets/scripts/StaticDatas/SoundTableData":8,"./assets/scripts/Manager/DriveManager/DriveManager":5,"./assets/scripts/Manager/SoundManager":14,"./assets/scripts/Tools/ResUtil":18,"./assets/scripts/StaticDatas/DescribeTableData":21,"./assets/scripts/UI/GameUI/Dashboard":7,"./assets/scripts/Example/LoadCSV/LoadCSVExp":9,"./assets/scripts/Game/Constellation/ConstellationScript":12,"./assets/scripts/Tools/UIUtil":28,"./assets/scripts/UI/DisConnectUI/DisConnectUI":15,"./assets/scripts/UI/StartUI/StartUI":16,"./assets/scripts/UI/DescribeUI/DescribeUI":17,"./assets/scripts/UI/ShowResultUI/ShowResultUI":22,"./assets/scripts/UI/GameUI/GameUI":31,"./assets/scripts/UI/GameUI/RadarChartBz":35},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/UIDef.js"},{"deps":{"../Def/MessageDef":36,"../Manager/MessageDispatcher/MessageDispatcher":11,"../Manager/SoundManager":14,"../Tools/ResUtil":18,"../Manager/UserManager/UserManager":10,"./Constellation/ConstellationScript":12},"path":"preview-scripts/assets/scripts/Game/BrainGameScene.js"},{"deps":{"../../Def/UIDef":1,"../../Tools/ResUtil":18,"../../Tools/TableReader":4,"../../Tools/UIUtil":28},"path":"preview-scripts/assets/scripts/UI/LoadingUI/LoadingUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TableReader.js"},{"deps":{"../../Def/MessageDef":36,"../../Tools/HTTPUtil":20,"../MessageDispatcher/MessageDispatcher":11},"path":"preview-scripts/assets/scripts/Manager/DriveManager/DriveManager.js"},{"deps":{"./Def/UIDef":1,"./Def/StorageDef":19,"./Tools/UIUtil":28,"./Tools/StorageUtil":26},"path":"preview-scripts/assets/scripts/Game.js"},{"deps":{"../../Def/MessageDef":36,"../../Manager/DriveManager/DriveManager":5,"../../Manager/MessageDispatcher/MessageDispatcher":11,"../../Tools/MathUtil":27},"path":"preview-scripts/assets/scripts/UI/GameUI/Dashboard.js"},{"deps":{"../Tools/TableReader":4},"path":"preview-scripts/assets/scripts/StaticDatas/SoundTableData.js"},{"deps":{"../../StaticDatas/SoundTableData":8,"../../Tools/TableReader":4},"path":"preview-scripts/assets/scripts/Example/LoadCSV/LoadCSVExp.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Manager/UserManager/UserManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Manager/MessageDispatcher/MessageDispatcher.js"},{"deps":{"../../Manager/SoundManager":14,"../../Manager/MessageDispatcher/MessageDispatcher":11,"../../Def/MessageDef":36},"path":"preview-scripts/assets/scripts/Game/Constellation/ConstellationScript.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/DataStructure/List.js"},{"deps":{"../StaticDatas/SoundTableData":8},"path":"preview-scripts/assets/scripts/Manager/SoundManager.js"},{"deps":{"../../Manager/DriveManager/DriveManager":5,"../../Tools/UIUtil":28,"../../Def/UIDef":1,"../GameUI/GameUI":31},"path":"preview-scripts/assets/scripts/UI/DisConnectUI/DisConnectUI.js"},{"deps":{"../../Def/UIDef":1,"../../Manager/UserManager/UserManager":10,"../../Manager/SoundManager":14,"../../Tools/UIUtil":28},"path":"preview-scripts/assets/scripts/UI/StartUI/StartUI.js"},{"deps":{"../../Manager/SoundManager":14,"../../Def/UIDef":1,"../../Tools/UIUtil":28,"../../StaticDatas/DescribeTableData":21},"path":"preview-scripts/assets/scripts/UI/DescribeUI/DescribeUI.js"},{"deps":{"./DataStructure/List":13},"path":"preview-scripts/assets/scripts/Tools/ResUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/StorageDef.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/HTTPUtil.js"},{"deps":{"../Tools/TableReader":4},"path":"preview-scripts/assets/scripts/StaticDatas/DescribeTableData.js"},{"deps":{"../../Manager/DriveManager/DriveManager":5,"../../Def/UIDef":1,"../../Manager/UserManager/UserManager":10,"../../Manager/SoundManager":14,"../../Tools/UIUtil":28},"path":"preview-scripts/assets/scripts/UI/ShowResultUI/ShowResultUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Dictionary.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/UILoader.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TimeUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/StorageUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/MathUtil.js"},{"deps":{"./DataStructure/List":13,"./UILoader":24,"./ResUtil":18},"path":"preview-scripts/assets/scripts/Tools/UIUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TransformUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/CookieUtil.js"},{"deps":{"../../Def/MessageDef":36,"../../Def/UIDef":1,"../../Manager/SoundManager":14,"../../Manager/DriveManager/DriveManager":5,"../../Manager/MessageDispatcher/MessageDispatcher":11,"../../Tools/UIUtil":28,"./CountDown":32,"./Dashboard":7,"./RadarChartBz":35},"path":"preview-scripts/assets/scripts/UI/GameUI/GameUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GameUI/CountDown.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/LoadingUI/LoadingRotation.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GameUI/RadarChart.js"},{"deps":{"../../Tools/MathUtil":27,"../../Def/MessageDef":36,"../../Manager/MessageDispatcher/MessageDispatcher":11},"path":"preview-scripts/assets/scripts/UI/GameUI/RadarChartBz.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/MessageDef.js"}];
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
    