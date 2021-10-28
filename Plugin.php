<?php
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
/**
 * github名片
 * 
 * @package GithubWidgetPlus
 * @author sunadqiang,hongweipeng
 * @version 0.3.0
 * @link https://www.letuisoft.com
 */
class GithubWidgetPlus_Plugin implements Typecho_Plugin_Interface {
    /**
     * 激活插件方法,如果激活失败,直接抛出异常
     * 
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function activate() {
        Typecho_Plugin::factory('Widget_Archive')->header = array(__CLASS__, 'header');
        Typecho_Plugin::factory('Widget_Archive')->footer = array(__CLASS__, 'footer');
    }
    
    /**
     * 禁用插件方法,如果禁用失败,直接抛出异常
     * 
     * @static
     * @access public
     * @return void
     * @throws Typecho_Plugin_Exception
     */
    public static function deactivate(){}
    
    /**
     * 获取插件配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form 配置面板
     * @return void
     */
    public static function config(Typecho_Widget_Helper_Form $form) {
        $jq_import = new Typecho_Widget_Helper_Form_Element_Radio('jq_import', array(
            0   =>  _t('不引入'),
            1   =>  _t('引入')
        ), 1, _t('是否引入jQuery'), _t('此插件需要jQuery，如已有选择不引入避免引入多余jQuery'));
        $form->addInput($jq_import->addRule('enum', _t('必须选择一个模式'), array(0, 1)));
    }
    
    /**
     * 个人用户的配置面板
     * 
     * @access public
     * @param Typecho_Widget_Helper_Form $form
     * @return void
     */
    public static function personalConfig(Typecho_Widget_Helper_Form $form){}
    
    /**
     * 插件实现方法
     * 
     * @access public
     * @return void
     */
    public static function header(){}
    public static function footer() {
        if (Helper::options()->plugin('GithubWidgetPlus')->jq_import) {
            echo '<script src="//cdn.bootcss.com/jquery/2.1.4/jquery.min.js"></script>';
        }
        $jsUrl = Helper::options()->pluginUrl . '/GithubWidgetPlus/GithubUserWidget.js';
        echo '<script type="text/javascript" src="'.$jsUrl.'"></script>';
    }
}
