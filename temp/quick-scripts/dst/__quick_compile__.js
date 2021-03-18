
(function () {
var scripts = [{"deps":{"./assets/scripts/Def/StorageDef":1,"./assets/scripts/Def/UIDef":34,"./assets/scripts/Def/MessageDef":35,"./assets/scripts/Dictionary":10,"./assets/scripts/Game/BrainGameScene":2,"./assets/scripts/Game/Constellation/ConstellationScript":12,"./assets/scripts/Manager/DriveManager/DriveManager":16,"./assets/scripts/Manager/MessageDispatcher/MessageDispatcher":5,"./assets/scripts/Manager/SoundManager":18,"./assets/scripts/Manager/UserManager/UserManager":11,"./assets/scripts/StaticDatas/SoundTableData":13,"./assets/scripts/StaticDatas/DescribeTableData":21,"./assets/scripts/Tools/HTTPUtil":20,"./assets/scripts/Tools/MathUtil":24,"./assets/scripts/Tools/ResUtil":19,"./assets/scripts/Tools/StorageUtil":27,"./assets/scripts/Tools/TableReader":36,"./assets/scripts/Tools/TimeUtil":23,"./assets/scripts/Tools/UILoader":22,"./assets/scripts/Tools/TransformUtil":26,"./assets/scripts/Tools/UIUtil":31,"./assets/scripts/Tools/CookieUtil":32,"./assets/scripts/Tools/DataStructure/List":7,"./assets/scripts/Game":25,"./assets/scripts/Example/LoadCSV/LoadCSVExp":8,"./assets/scripts/UI/DisConnectUI/DisConnectUI":6,"./assets/scripts/UI/GameUI/Dashboard":28,"./assets/scripts/UI/GameUI/GameUI":29,"./assets/scripts/UI/GameUI/RadarChart":9,"./assets/scripts/UI/GameUI/RadarChartBz":3,"./assets/scripts/UI/GameUI/CountDown":30,"./assets/scripts/UI/LoadingUI/LoadingUI":4,"./assets/scripts/UI/LoadingUI/LoadingRotation":33,"./assets/scripts/UI/ShowResultUI/ShowResultUI":14,"./assets/scripts/UI/StartUI/StartUI":15,"./assets/scripts/UI/DescribeUI/DescribeUI":17},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/StorageDef.js"},{"deps":{"../Manager/MessageDispatcher/MessageDispatcher":5,"../Def/MessageDef":35,"../Tools/ResUtil":19,"../Manager/SoundManager":18,"../Manager/UserManager/UserManager":11,"./Constellation/ConstellationScript":12},"path":"preview-scripts/assets/scripts/Game/BrainGameScene.js"},{"deps":{"../../Def/MessageDef":35,"../../Manager/MessageDispatcher/MessageDispatcher":5,"../../Tools/MathUtil":24},"path":"preview-scripts/assets/scripts/UI/GameUI/RadarChartBz.js"},{"deps":{"../../Def/UIDef":34,"../../Tools/ResUtil":19,"../../Tools/UIUtil":31,"../../Tools/TableReader":36},"path":"preview-scripts/assets/scripts/UI/LoadingUI/LoadingUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Manager/MessageDispatcher/MessageDispatcher.js"},{"deps":{"../../Manager/DriveManager/DriveManager":16,"../../Def/UIDef":34,"../../Tools/UIUtil":31,"../GameUI/GameUI":29},"path":"preview-scripts/assets/scripts/UI/DisConnectUI/DisConnectUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/DataStructure/List.js"},{"deps":{"../../Tools/TableReader":36,"../../StaticDatas/SoundTableData":13},"path":"preview-scripts/assets/scripts/Example/LoadCSV/LoadCSVExp.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GameUI/RadarChart.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Dictionary.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Manager/UserManager/UserManager.js"},{"deps":{"../../Manager/MessageDispatcher/MessageDispatcher":5,"../../Manager/SoundManager":18,"../../Def/MessageDef":35},"path":"preview-scripts/assets/scripts/Game/Constellation/ConstellationScript.js"},{"deps":{"../Tools/TableReader":36},"path":"preview-scripts/assets/scripts/StaticDatas/SoundTableData.js"},{"deps":{"../../Def/UIDef":34,"../../Manager/DriveManager/DriveManager":16,"../../Manager/SoundManager":18,"../../Manager/UserManager/UserManager":11,"../../Tools/UIUtil":31},"path":"preview-scripts/assets/scripts/UI/ShowResultUI/ShowResultUI.js"},{"deps":{"../../Def/UIDef":34,"../../Manager/SoundManager":18,"../../Manager/UserManager/UserManager":11,"../../Tools/UIUtil":31},"path":"preview-scripts/assets/scripts/UI/StartUI/StartUI.js"},{"deps":{"../../Tools/HTTPUtil":20,"../../Def/MessageDef":35,"../MessageDispatcher/MessageDispatcher":5},"path":"preview-scripts/assets/scripts/Manager/DriveManager/DriveManager.js"},{"deps":{"../../Def/UIDef":34,"../../Manager/SoundManager":18,"../../StaticDatas/DescribeTableData":21,"../../Tools/UIUtil":31},"path":"preview-scripts/assets/scripts/UI/DescribeUI/DescribeUI.js"},{"deps":{"../StaticDatas/SoundTableData":13},"path":"preview-scripts/assets/scripts/Manager/SoundManager.js"},{"deps":{"./DataStructure/List":7},"path":"preview-scripts/assets/scripts/Tools/ResUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/HTTPUtil.js"},{"deps":{"../Tools/TableReader":36},"path":"preview-scripts/assets/scripts/StaticDatas/DescribeTableData.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/UILoader.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TimeUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/MathUtil.js"},{"deps":{"./Def/StorageDef":1,"./Def/UIDef":34,"./Tools/StorageUtil":27,"./Tools/UIUtil":31},"path":"preview-scripts/assets/scripts/Game.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TransformUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/StorageUtil.js"},{"deps":{"../../Def/MessageDef":35,"../../Manager/DriveManager/DriveManager":16,"../../Manager/MessageDispatcher/MessageDispatcher":5,"../../Tools/MathUtil":24},"path":"preview-scripts/assets/scripts/UI/GameUI/Dashboard.js"},{"deps":{"../../Def/MessageDef":35,"../../Def/UIDef":34,"../../Manager/MessageDispatcher/MessageDispatcher":5,"../../Manager/DriveManager/DriveManager":16,"../../Tools/UIUtil":31,"../../Manager/SoundManager":18,"./RadarChartBz":3,"./Dashboard":28,"./CountDown":30},"path":"preview-scripts/assets/scripts/UI/GameUI/GameUI.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/GameUI/CountDown.js"},{"deps":{"./DataStructure/List":7,"./UILoader":22,"./ResUtil":19},"path":"preview-scripts/assets/scripts/Tools/UIUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/CookieUtil.js"},{"deps":{},"path":"preview-scripts/assets/scripts/UI/LoadingUI/LoadingRotation.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/UIDef.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Def/MessageDef.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Tools/TableReader.js"}];
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
    