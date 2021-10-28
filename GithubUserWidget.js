/**
 * @author bh-lay
 *
 * @github https://github.com/bh-lay/github-widget-user
 * @modified 2014-11-5 16:0
 *
 * @github https://github.com/sundaqiang/GithubWidgetPlus/
 * @modified 2021-10-28 22:50
 */
(function ($) {
    //图片
    let imgbase64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAyCAMAAABGUCSuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODZGOUU0RUYzN0Y0MTFFQ0IzQTJBRDRCOUIzNDgzMTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODZGOUU0RjAzN0Y0MTFFQ0IzQTJBRDRCOUIzNDgzMTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NkY5RTRFRDM3RjQxMUVDQjNBMkFENEI5QjM0ODMxNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NkY5RTRFRTM3RjQxMUVDQjNBMkFENEI5QjM0ODMxNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqJTuU8AAAGAUExUReDg4LW1tYODg9jY2LGxsaWlpVFRUVJSUm5ubtbW1nZ2dlpaWvr6+oaGhoSEhHt7e5CQkGVlZX5+fvX19VhYWF1dXYiIiN7e3pycnJmZmWdnZ5iYmKqqqnBwcMrKyoqKilZWVsHBwV9fX9zc3Kenp4CAgLu7u9ra2pSUlI6OjlRUVGtra+Tk5GNjY2pqanV1dcfHx8jIyMXFxWxsbOfn556ennl5eWFhYX19fdDQ0NPT05+fn87OzmhoaO3t7ebm5vz8/MzMzG1tbfPz8+vr63JycqysrNXV1by8vJOTk3Nzc76+vsbGxsTExKCgoMPDw5eXl7m5uezs7IyMjPj4+Glpae7u7re3t7Kyss3NzWBgYOjo6Pn5+a+vr/f39+/v7/Ly8nR0dLa2tuLi4vHx8Xh4eJKSkqOjo729vePj4+rq6s/Pz62trfDw8MLCwri4uK6urqKiov39/cnJydLS0tTU1GJiYrOzs3x8fJaWltHR0f7+/uXl5fb29qGhof///873C2QAAACAdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AOAVLZwAABahJREFUeNrsl2lT4kwQgEEgyRKRQ3GBFUVcdlVIEJFT7lPRxYtDxfu+7/XYq//6TgKSCbJV2Vqr3nqr7A/pTtIzTzrTM9Mjg/9SZG/0/yM9dGVShl+Fbg7oGST6wLTUpjsUaT2w2qyXf4E7Ca4GT9rQs+aQx3ObDB1uY86arqC7KWpNMIi96+05rCAVK44uteM8mNo91XTddmna0P3jdT3oxpwJciEy/izfpgkj1o//uGG9twyIEaqPXDQ7R74X8OToOZyPJtvQj9BlTB1kaau5+dbvNQhNXRazEHu1ZwNd4xnOjhMLOOKM+AKQ0VdCRLEFHiHJMIRJMvKSjpqAqefi7ptKiLAg00bTDXuFmOn0Pr/ojOY4NTLC3x2yGEJJhNB1gUrAO0Ilgs+R1WRKm0pWyTkRfUsm81/tboApC3uw5mz6s2lg2TXePCVyMNGkhMlFTs3Xh3yCwCPnI+udRxcF8RGDL44qAfKHefSB9dbPdL+dUm/bHsCnldF9JSES5zH8tJa7eThqutv8rlzdZ36YVzd0s8U6zU/BBPWJU0NMDksHa9PMqnA6LS9BTGsCXwpu4EdZoLtQR6nyGvrtXDeuJt2k49XB6vCSroZGqNnCruWVgp3g9VNAoPNj2xiDLE5nhiJ9iWEf+NSZXH+MFdGh2+ues12BiN5H1Zeb4of5+Tj6+maL90Z+AuTU/N2kfUigqx3yhiU3GHG6XqFiJp4muT/PqNJeMR0SWaIKYnq+p4KNKD7uCuKJm4/csMM1kccS3sja6ivZtK1MzuKxc5Ndg+gceLcldoDNxgwV6Ikons6HUcDxA7CmXwH4fkDgy7DXDCfGMWR8NdYgZ8Vjf7eu3ZxGdH9cu57G6GnRlEkLs2GByDTtIeKTaEkhBmXMBjf1kvjjHuS02oeMKQZ9ohGPXSE7Ap0Krgsw8/6nQA/Ix3CRYzkUVG82rNpqh3hRCR/Pc7n3+U70tNdy9CsbQ8ZeoThV7sXotuXFtEu95Bow/tiK9QurTdBI42LUYr3p7vu4WbuoMg6/3PwUL5f4xDVNODncD5agfyUwuoFhWVZvYS16pBmHtP3qgSJSOoqk5FI3uM7MdPTxYN+mqXW+wv5+s7JuUob+qkl8qricf6us3uhv9Df6a0j3ybmur5KpKHXnJ53S6UeOrohUxP49f/ZoiP4eOwSMrKboQJSJBmjv6qNk+hUZDNpm/+gYLgcOhDv7QtKDpL//llPJBWzzsxYV7GPEEzFTimtCKn2Fzsfis/TnP/hlCr4vjFDoeyuitxWhHILtEJxxxUp4He5oqXTHpUurPv619Ae/WVSM7NItRc/eNGUuiYseALdQPM5Kpu9f5Pz7ygt0drnJvHSLOewxULWWXOqUPBrt/nd6bEPZ9dO/H3fIh0wMhTt83QI499mHlXqtJSymX9kWoaROpVvo4e6OXk46uvPS6IdGxXc9Svhle+lJc80Ir3ezQe9cVb9/CtD/aRNEdLn9lDO7llro37Ym67IVlkYn+9bg0taZJmegEzawU9m2OjE2+ny8BTHd+VAv7fUt9Ium+UUanfnKBeGn+JPAMUY3otLF2qZ84eiTFh+SaXLnX8ed8XBln8X5nU9gjK55rI0Rbk9bOhSj3pSzsNCadZHScnVnZ6e6XAr9BR0y3dBK38vqAxemgBuFf3u5hR0NNkW9bGLz3X2316E1GAzajj2JWcdwZ4xE4xF2gkZ16DjymNDRB+sBBz8+daHPBqempmY4QXrwDMO455rmuDT6vQI8QVYe48tOU5s2NQ25CwMWoZj3d+Ci1WF0IUfHpNGNBjc9UHRSvXOXHVaDp41fJNWSRLHaxLPU4rhnYaVpnvZIohsKH7kFLm+2di272vqlqZHBAL4Mf/Ban8WrwT23l+OuusTlttfa32VZvXlDiqMmSjnrQpW1b5XVG72N/BZgACdssI81eiZCAAAAAElFTkSuQmCC';
    //css
    let css_tpl = '<style type="text/css">.github-widget-plus{margin-top:1.5em;margin-bottom:1.5em;}.github-widget-loading{line-height:100px;text-align:center;font-size:24px;color:#aaa}.github-widget_body{max-width:300px;margin:auto;overflow:hidden;background:#fff;box-shadow:1px 2px 16px rgba(0,0,0,.2)}.gitUW_avatar{display:block;overflow:hidden}.gitUW_avatar img{display:block;width:100%;min-height:100px;background:#333;-webkit-transition:0.3s;-moz-transition:0.3s;transition:0.3s}.gitUW_avatar:hover img{-webkit-transform:scale(1.3);-moz-transform:scale(1.3);transform:scale(1.3)}.gitUW_name{display:block;padding:10px 10px 20px;border-bottom:1px solid #eee;-webkit-transition:0.4s;-moz-transition:0.4s;transition:0.4s}.gitUW_name strong{display:block;width:100%;overflow:hidden;font-size:26px;color:#333;line-height:30px;text-overflow:ellipsis}.gitUW_name span{display:block;width:100%;font-size:20px;font-style:normal;font-weight:300;line-height:24px;color:#666;text-overflow:ellipsis;overflow:hidden}.gitUW_name:hover{background:#eee}.gitUW_info{padding:10px 0 20px}.gitUW_info p{height:25px;padding-left:10px;text-overflow:ellipsis;overflow:hidden;margin-bottom:5px;line-height:unset;}.gitUW_info p span,.gitUW_info p a{display:inline-block;vertical-align:text-top;height:25px;line-height:25px;font-size:14px}.gitUW_info p a{color:#4183c4;text-decoration:none}.gitUW_info p a:hover{text-decoration:underline}.gitUW_info p span{color:#333}.gitUW_count{height:75px;background:#333}.gitUW_count a{display:block;float:left;width:33.33%;padding:15px 0;text-align:center;-webkit-transition:0.4s;-moz-transition:0.4s;transition:0.4s}.gitUW_count a strong{display:block;line-height:30px;font-size:28px;font-weight:bold;color:#4183c4}.gitUW_count a span{display:block;line-height:15px;font-size:12px;color:#999}.gitUW_count a:hover{background:#444}.gitUW_ico_company,.gitUW_ico_location,.gitUW_ico_email,.gitUW_ico_blog,.gitUW_ico_created_at,.gitUW_ico_updated_at,.gitUW_ico_language,.gitUW_ico_description,.gitUW_ico_size{display:inline-block;vertical-align:text-top;width:25px;height:25px;background-image:url(' + imgbase64 + ')}.gitUW_ico_company{background-position:0 0}.gitUW_ico_location{background-position:0 -25px}.gitUW_ico_email{background-position:-25px 0}.gitUW_ico_blog{background-position:-25px -25px}.gitUW_ico_created_at{background-position:-50px 0}.gitUW_ico_updated_at{background-position:-50px -25px}.gitUW_ico_language{background-position:-75px 0}.gitUW_ico_description{background-position:-75px -25px}.gitUW_ico_size{background-position:-100px 0}</style>';
    //模版
    const users_tpl = '<div class=github-widget_body><a href="<%=users.html_url%>"target=_blank class=gitUW_avatar title="<%=users.name%>的github"><img alt="<%=users.name%>"src="<%=users.avatar_url%>"></a><a href="<%=users.html_url%>"target=_blank class=gitUW_name title="<%=users.name%>的github"><strong><%=users.name%></strong><span><%=users.login%></span></a><div class=gitUW_info><%if(users.company && users.company.length){%><p><i class=gitUW_ico_company></i><span><%=users.company%></span></p><%}%><%if(users.location && users.location.length){%><p><i class=gitUW_ico_location></i><span><%=users.location%></span></p><%}%><%if(users.email && users.email.length){%><p><i class=gitUW_ico_email></i><a href="mailto:<%=users.email%>"><%=users.email%></a></p><%}%><%if(users.blog && users.blog.length){%><p><i class=gitUW_ico_blog></i><a href="<%=users.blog%>"target=_blank><%=users.blog%></a></p><%}%><%if(users.created_at.length){%><p><i class=gitUW_ico_created_at></i><span><%=users.created_at%>加入</span></p><%}%></div><div class=gitUW_count><a href="<%=users.html_url%>/followers"target=_blank><strong><%=users.followers%></strong><span>followers</span></a><a href="<%=users.html_url%>"target=_blank><strong><%=users.public_repos%></strong><span>Repos</span></a><a href="<%=users.html_url%>/following"target=_blank><strong><%=users.following%></strong><span>Following</span></a></div></div>';
    const repos_tpl = '<div class=github-widget_body><a href="<%=repos.html_url%>"target=_blank class=gitUW_avatar title="<%=repos.owner.login%>的<%=repos.name%>"><img alt="<%=repos.owner.login%>"src="<%=repos.owner.avatar_url %>"></a><a href="<%=repos.html_url%>"target=_blank class=gitUW_name title="<%=repos.owner.login%>的<%=repos.name%>"><strong><%=repos.owner.login%></strong><span><%=repos.name%></span></a><div class=gitUW_info><%if(repos.size){%><p><i class=gitUW_ico_size></i><span><%=repos.size%>KB</span></p><%}%><%if(repos.description){%><p><i class=gitUW_ico_description></i><span><%=repos.description%></span></p><%}%><%if(repos.language){%><p><i class=gitUW_ico_language></i><span><%=repos.language%></span></p><%}%><%if(repos.updated_at){%><p><i class=gitUW_ico_updated_at></i><span><%=repos.updated_at%>更新</span></p><%}%><%if(repos.created_at.length){%><p><i class=gitUW_ico_created_at></i><span><%=repos.created_at%>创建</span></p><%}%></div><div class=gitUW_count><a href="<%=repos.html_url%>/stargazers"target=_blank><strong><%=repos.stargazers_count%></strong><span>Star</span></a><a href="<%=repos.html_url%>/issues"target=_blank><strong><%=repos.open_issues_count%></strong><span>Issues</span></a><a href="<%=repos.html_url%>/network/members"target=_blank><strong><%=repos.forks_count%></strong><span>Fork</span></a></div></div>';

    //格式化时间
    function appendZero(obj) {
        let lut;
        return lut = obj < 10 ? "0" + obj : obj
    }

    function parseDate(input) {
        const date = new Date(input);
        return date.getFullYear() + '-' + (appendZero(date.getMonth() + 1)) + '-' + appendZero(date.getDate());
    }

    //渲染部分
    function render(str, data) {
        if (!str || !data) {
            return '';
        }
        return (new Function("obj",
            "var p=[];" +
            "with(obj){p.push('" +
            str.replace(/[\r\t\n]/g, " ")
                .split("<%").join("\t")
                .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                .replace(/\t=(.*?)%>/g, "',$1,'")
                .split("\t").join("');")
                .split("%>").join("p.push('")
                .split("\r").join("\\'")
            + "');}return p.join('');"))(data);
    }

    //获取用户信息
    function getUserInfo(content, callback) {
        $.ajax({
            url: 'https://api.github.com/users/' + content,
            async: false,
            dataType: 'jsonp',
            success: function (results) {
                if (results && results.meta && results.meta.status === 200) {
                    const users = results.data;
                    users.created_at = parseDate(users.created_at);
                    callback && callback(null, users);
                } else {
                    callback && callback(404);
                }
            }
        });
    }

    //获取项目信息
    function getReposInfo(content, callback) {
        $.ajax({
            url: 'https://api.github.com/repos/' + content,
            async: false,
            dataType: 'jsonp',
            success: function (results) {
                if (results && results.meta && results.meta.status === 200) {
                    const repos = results.data;
                    repos.created_at = parseDate(repos.created_at);
                    repos.updated_at = parseDate(repos.updated_at);
                    callback && callback(null, repos);
                } else {
                    callback && callback(404);
                }
            }
        });
    }

    //创建widget
    function createWidget($dom, content) {
        if (!content || content.length < 1) {
            return
        }
        $dom.html('<div class="github-widget_body github-widget-loading">正在加载</div>');
        let html;
        if (content.indexOf("/") !== -1) {
            getReposInfo(content, function (err, repos) {
                if (err) {
                    html = '<div class="github-widget_body github-widget-loading">加载失败</div>';
                } else {
                    html = render(repos_tpl, {
                        'repos': repos
                    });
                }
                $dom.html(html);
            });
        } else {
            getUserInfo(content, function (err, users) {
                if (err) {
                    html = '<div class="github-widget_body github-widget-loading">加载失败</div>';
                } else {
                    html = render(users_tpl, {
                        'users': users
                    });
                }
                $dom.html(html);
            });
        }
    }

    $.fn.github_widget = function () {
        $(this).each(function () {
            const $container = $(this);
            const content = $container.data('content');
            createWidget($container, content);
        });
    };
    $(function () {
        //页面加入css
        $('head').append(css_tpl);
        //置空无用变量
        css_tpl = imgbase64 = null;
        //查找并生成默认的widget
        setTimeout(function () {
            $('.github-widget-plus').github_widget();
        });
    });
})(jQuery);
