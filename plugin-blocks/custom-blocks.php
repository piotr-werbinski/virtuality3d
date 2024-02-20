<?php

/*
    Plugin Name: Plugin Blocks - Custom Gutenberg
    Description: This is a custom plugin.
    Version: 1.0
    Author: Piotr Werbinski
*/

function block_01_register_block() {
    register_block_type( __DIR__ . '/block-1' );
}

function block_02_register_block() {
    register_block_type( __DIR__ . '/block-2' );
}

function block_03_register_block() {
    register_block_type( __DIR__ . '/block-3' );
}

function block_04_register_block() {
    register_block_type( __DIR__ . '/block-4' );
}

function block_05_register_block() {
    register_block_type( __DIR__ . '/block-5' );
}

add_action( 'init', 'block_01_register_block' );
add_action( 'init', 'block_02_register_block' );
add_action( 'init', 'block_03_register_block' );
add_action( 'init', 'block_04_register_block' );
add_action( 'init', 'block_05_register_block' );

?>