#!/bin/sh
# This script is required to run PHP scripts using FastCGI from your account, please don't modify or remove it
# Version 3.1 CloudLinux for PHP version 7.0

PHPRC="/opt/alt/php70/etc"
export PHPRC

PHP_INI_SCAN_DIR="/opt/alt/php70/link/conf:."
export PHP_INI_SCAN_DIR

PHP_FCGI_MAX_REQUESTS=5000
export PHP_FCGI_MAX_REQUESTS
exec /opt/alt/php70/usr/bin/php-cgi
