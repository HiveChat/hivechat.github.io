# How it works:
## Communication:
* Hive works in intranet (LAN) environment via User Datagram Protocol (UDP), so If LAN UDP is disabled by the router, Hive will not work correctly.
* After Hive 0.0.6, the communication protocol is changed. In the new protocol, messages are sent in the data format of JSON Object rather than C++ binary stream in the past. The aim of this change is to improve the compatibility of Hive. In the future, the communication block of Hive has a chance to be rewritten by Node.js.

##File Transfer Server Plan
* Hive's file transfer server is still being built. And it works on TCP connection.
* There are many common problems that will be considered in the process:

	**TCP Sticky Package**
>
>	* A header is placed at the beginning of each package, indicating the size of the package. Then the read function will cut the stream at the end of the packages, so that they are divided.

	**Blocking Threads While Waiting**
>
>	* Apart from the fact that QTcpSocket is well designed and it doesn't block while waiting. TCP sockets are placed in a thread pool, which is reimplemented from Qt Library. 
>	* Then the busy sockets are evenly distributed in every threads so that they can do their jobs efficiently.
>	* The code is not yet shown inside the project source code because I don't want to mess the repository up. I will include that very soon.
 
	**Compatibility Between Languages**
>	* Qt has its own binary format, which is called QDataStream. To communicate with programs written with other frameworks or languages, text is used instead of binary. 
>	* All the packets will be sent in JSON format for easier connection with other languages.
	
## Application:
### Threads:
#### Main thread:
* Graphical User Interface (GUI) thread. This thread is created by Qt Library implicitly.

#### Data thread:
* This thread saves and synchronises user data and messages. To make Hive work fast in old computers with HDD, this thread is responsible for all the disk operation in order not to block the GUI thread.
* Location: ThreadData.h

#### Network thread:
* This thread is responsible for sending and receiving data to and from other users. All the data collected will be sent to Data thread to process.
* Location: ThreadNet.h

#### Graphical User Interface:
* Coming soon...

