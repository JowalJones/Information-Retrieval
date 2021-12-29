"""
==================================================================================================

Porter Stemming Algorithm
This is the Porter stemming algorithm, ported to Python from the
version coded up in ANSI C by the author. It may be be regarded
as canonical, in that it follows the algorithm presented in

Porter, 1980, An algorithm for suffix stripping, Program, Vol. 14,
no. 3, pp 130-137,

only differing from it at the points maked --DEPARTURE-- below.

See also http://www.tartarus.org/~martin/PorterStemmer

The algorithm as described in the paper could be exactly replicated
by adjusting the points of DEPARTURE, but this is barely necessary,
because (a) the points of DEPARTURE are definitely improvements, and
(b) no encoding of the Porter stemmer I have seen is anything like
as exact as this version, even with the points of DEPARTURE!

Vivake Gupta (v@nano.com)

Release 1: January 2001

Further adjustments by Santiago Bruno (bananabruno@gmail.com)
to allow word input not restricted to one word per line, leading
to:

release 2: July 2008
==================================================================================================
"""


import sys,os,re
import time

# define global variables used as counters
tokens = 0
documents = 0
terms = 0
termindex = 0
docindex = 0 

# initialize list variable
#
alltokens = []
alldocs = []

#
# Capture the start time of the routine so that we can determine the total running
# time required to process the corpus
#
t2 = time.localtime()   


# set the name of the directory for the corpus
#
dirname = "C:\\Users\\jones\\OneDrive\\Documents\\CodeZone\\Information Retrieval\\cacm\\cacm"
# assert os.path.isfile(dirname)
# with open(dirname, "r") as f:
#   pass


# For each document in the directory read the document into a string

all = [f for f in os.listdir(dirname)]

for f in all:

    documents+=1

    with open(dirname+'/'+f, 'r') as myfile:

        alldocs.append(f)

        data=myfile.read().replace('\n', '')

        for token in data.split():

            alltokens.append(token)

            tokens+=1

# Open for write a file for the document dictionary
#
documentfile = open(dirname+'/'+'documents.dat', 'w')
alldocs.sort()
for f in alldocs:
  docindex += 1
  documentfile.write(f+','+str(docindex)+os.linesep)
documentfile.close()

#
# Sort the tokens in the list
alltokens.sort()

#
# Define a list for the unique terms  
g=[]

#
# Identify unique terms in the corpus
for i in alltokens:    
    if i not in g:
       g.append(i)
       terms+=1

terms = len(g)

# Output Index to disk file. As part of this process we assign an 'index' number to each unique term.  
# 
indexfile = open(dirname+'/'+'index.dat', 'w')
for i in g:
  termindex += 1
  indexfile.write(i+','+str(termindex)+os.linesep)
indexfile.close()


# Print metrics on corpus
#

print ("Documents %i" % documents)
print ("Tokens %i" % tokens)
print ("Terms %i" % terms)

import math

# size of vocabulary (M) in Heap's law, k=40, peta=0.5
#T is terms/tokens?
print("============================================")
M = 40*math.pow(tokens, 0.5)
print("size of vocabulary (M) in Heap's law, k=40, peta=0.5")
print("size of vocabulary %i" %M)