#!/bin/sh
# This script is required to run PHP scripts using FastCGI from your account, please don't modify or remove it
# Version 3.1 CloudLinux for PHP version 5.3

PHPRC="/opt/alt/php53/etc"
export PHPRC

PHP_FCGI_MAX_REQUESTS=5000
export PHP_FCGI_MAX_REQUESTS
exec /opt/alt/php53/usr/bin/php-cgi
