FROM php:7.0-apache
RUN apt-get update && apt-get install -y git zip unzip ssmtp wget
RUN a2enmod rewrite
COPY ./install_composer.sh /
RUN /install_composer.sh
RUN php composer.phar require phpmailer/phpmailer
COPY ./.php.ini /usr/local/etc/php/
COPY ./ /var/www/html/