# Somador fatura banco

Soma o total debitado, sigla 'D' da conta CAIXA (Internet Banking).
Cada linha é uma operação.


Entrada:

DATA COD DESCRICAO VALOR [D, C] SALDO 

01/08/0000	292303	CP DB VISA	35,00 D	X.XXX,XX C

01/08/0000	000000	REM BASICA	0,91 C	X.XXX,XX C

01/08/0000	000000	CRED JUROS	2,79 C	X.XXX,XX C

01/08/0000	301052	ENVIO PIX	216,70 D	X.XXX,XX C



Saída:

Saiu da Conta == R$ 251.7
