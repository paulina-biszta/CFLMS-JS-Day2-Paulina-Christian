var withdraw = 6040;

var stash_hundreds = 10;
var stash_fifties = 10;
var stash_twenties = 10;
var stash_tens = 10;
var no_withdraw = 0;

var hundreds = Math.floor(withdraw/100);
var rest = withdraw%100;

if (stash_hundreds < hundreds) {
	rest+=(hundreds-stash_hundreds)*100;
	hundreds = stash_hundreds;
}

var fifties = Math.floor(rest/50);
rest%=50;

if (stash_fifties < fifties) {
	rest+=(fifties-stash_fifties)*50;
	fifties = stash_fifties;
}

var twenties = Math.floor(rest/20);
rest%=20;

if (stash_twenties < twenties) {
	rest+=(twenties-stash_twenties)*20;
	twenties=stash_twenties;
}

var tens = Math.floor(rest/10);
rest%=10;

if (stash_tens < tens) {
	rest+=(tens-stash_tens)*10;
	tens=stash_tens;
	no_withdraw = rest;
}

document.write("Amout you want to withdraw: "+withdraw);
document.write("<br>You get: "+hundreds+" Hundreds, "+fifties+" Fifties, "+twenties+" Twenties, "+tens+" Tens.")
document.write("<br>Could not be withdrawn: "+no_withdraw);